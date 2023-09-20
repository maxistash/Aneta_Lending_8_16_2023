from rest_framework import generics, mixins
from .models import Applicant
from .serializers import ApplicantSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from api.mixins import StaffEditorPermissionMixin, UserQuerySetMixin, UserQuerySetMixin

class ApplicantListCreateAPIView(StaffEditorPermissionMixin, UserQuerySetMixin, generics.ListCreateAPIView):
    queryset = Applicant.objects.all()
    serializer_class = ApplicantSerializer
    # authentication_classes = [
    #     authentication.SessionAuthentication,
    #     TokenAuthentication
    #     ]
    # permission_classes = [permissions.IsAdminUser, IsStaffEditorPermission]

    def perform_create(self, serializer):
        #going to be used to create user auth
        # email = serializer.validated_data.pop('email')
        applicant_id = serializer.validated_data.get('applicant_id')
        last_name = serializer.validated_data.get('last_name') or None
        if last_name is None:
            last_name = "Doe"
        serializer.save(user = self.request.user, last_name=last_name)

# THIS IS NOT NEEDED BECAUSE OF THE USERQUERYSETMIXIN
    # def get_queryset(self, *args, **kwargs):
    #     queryset = super().get_queryset(*args, **kwargs)
    #     request = self.request
    #     user = request.user
    #     if not user.is_authenticated:
    #         return Loan.objects.none()
    #     return queryset.filter(user=request.user)

applicant_list_create_view = ApplicantListCreateAPIView.as_view()