from rest_framework import generics, mixins
from .models import Loan
from .serializers import LoanSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from api.mixins import StaffEditorPermissionMixin, UserQuerySetMixin, UserQuerySetMixin

class LoanListCreateAPIView(StaffEditorPermissionMixin, UserQuerySetMixin, generics.ListCreateAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    # authentication_classes = [
    #     authentication.SessionAuthentication,
    #     TokenAuthentication
    #     ]
    # permission_classes = [permissions.IsAdminUser, IsStaffEditorPermission]

    def perform_create(self, serializer):
        #going to be used to create user auth
        # email = serializer.validated_data.pop('email')
        apr = serializer.validated_data.get('apr')
        loan_requirement = serializer.validated_data.get('loan_requirement') or None
        if loan_requirement is None:
            loan_requirement = apr
        serializer.save(user = self.request.user, loan_requirement=loan_requirement)

# THIS IS NOT NEEDED BECAUSE OF THE USERQUERYSETMIXIN
    # def get_queryset(self, *args, **kwargs):
    #     queryset = super().get_queryset(*args, **kwargs)
    #     request = self.request
    #     user = request.user
    #     if not user.is_authenticated:
    #         return Loan.objects.none()
    #     return queryset.filter(user=request.user)

loan_list_create_view = LoanListCreateAPIView.as_view()

class LoanDetailAPIView(StaffEditorPermissionMixin, UserQuerySetMixin, generics.RetrieveAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

loan_detail_view = LoanDetailAPIView.as_view()
        

class LoanUpdateAPIView(StaffEditorPermissionMixin, UserQuerySetMixin, generics.UpdateAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    lookup_field = 'pk'
    # permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        instance=serializer.save()
        if not instance.loan_requirement:
            instance.loan_requirement = instance.apr
        
        # return super().perform_update(serializer)

loan_update_view = LoanUpdateAPIView.as_view()


class LoanDestroyAPIView(StaffEditorPermissionMixin, UserQuerySetMixin, generics.DestroyAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    lookup_field = 'pk'
    # authentication_classes = [authentication.SessionAuthentication]
    # permission_classes = [permissions.IsAuthenticated]

    def perform_destroy(self, instance):
        super().perform_destroy(instance)
       

loan_delete_view = LoanDestroyAPIView.as_view()

# if you wanted to create a seperate list view
# class LoanListAPIView(generics.ListAPIView):
#     queryset = Loan.objects.all()
#     serializer_class = LoanSerializer

# loan_list_view = LoanListAPIView.as_view()    

class LoanMixinView(
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    generics.GenericAPIView
    ):

    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
    lookup_field = 'pk'

    def get(self, request, *args, **kwargs):
        print(args, kwargs)
        pk = kwargs.get('pk')
        if pk is not None:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    def perform_create(self, serializer):
        #going to be used to create user auth
        apr = serializer.validated_data.get('apr')
        loan_requirement = serializer.validated_data.get('loan_requirement') or None
        if loan_requirement is None:
            loan_requirement = "Credit Score of at least 750"
        serializer.save(loan_requirement=loan_requirement)
    
    # post method here

loan_mixin_view = LoanMixinView.as_view()

@api_view(['GET','POST'])
def loan_alt_view(request, pk=None, *args, **kwargs):
    method = request.method

    if method =="GET":
    # to create a detail view, you need to pass certain arguments like pk above
        if pk is not None:
            # detail view
            obj = get_object_or_404(Loan, pk=pk)
            data = LoanSerializer(obj, many=False).data
            return Response(data)
       # use this for list view
        queryset = Loan.objects.all()
        data = LoanSerializer(queryset, many=True).data
        return Response(data)
    
    if method == "POST":
        # use this for creating stuff
        serializer = LoanSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            apr = serializer.validated_data.get('apr')
            loan_requirement = serializer.validated_data.get('loan_requirement') or None
            if loan_requirement is None:
                loan_requirement = apr
            serializer.save(loan_requirement=loan_requirement)
            return Response(serializer.data)
        return Response({'invalid':'not good data'}, status=400)
