from rest_framework import generics, mixins
from .models import Bank
from .serializers import BankSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from api.mixins import StaffEditorPermissionMixin, UserQuerySetMixin

class BankListCreateAPIView(StaffEditorPermissionMixin, generics.ListCreateAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer
    # authentication_classes = [
    #     authentication.SessionAuthentication,
    #     TokenAuthentication
    #     ]
    # permission_classes = [permissions.IsAdminUser, IsStaffEditorPermission]

    def perform_create(self, serializer):
        # bank_id = serializer.validated_data.get('bank_id')
        name = serializer.validated_data.get('name') or None
        if name is None:
            name = "Unknown"
        serializer.save(name=name)

bank_list_create_view = BankListCreateAPIView.as_view()

class BankDetailAPIView(StaffEditorPermissionMixin, generics.RetrieveAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer

bank_detail_view = BankDetailAPIView.as_view()

@api_view(['GET','POST'])
def loan_alt_view(request, pk=None, *args, **kwargs):
    method = request.method

    if method =="GET":
    # to create a detail view, you need to pass certain arguments like pk above
        if pk is not None:
            # detail view
            obj = get_object_or_404(Bank, pk=pk)
            data = BankSerializer(obj, many=False).data
            return Response(data)
       # use this for list view
        queryset = Bank.objects.all()
        data = BankSerializer(queryset, many=True).data
        return Response(data)
    
    if method == "POST":
        # use this for creating stuff
        serializer = BankSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            name = serializer.validated_data.get('name')
            # loan_requirement = serializer.validated_data.get('loan_requirement') or None
            # if loan_requirement is None:
            #     loan_requirement = apr
            # serializer.save()
            return Response(serializer.data)
        return Response({'invalid':'not good data'}, status=400)
