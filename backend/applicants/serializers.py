from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Applicant
# from .validators import validate_applicant_id
from api.serializers import UserPublicSerializer

class ApplicantSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)

    url = serializers.HyperlinkedIdentityField(view_name='applicant-detail', lookup_field='pk')
    # rep_email = serializers.EmailField(source='user.email', read_only=True)
    # applicant_id = serializers.CharField(validators=[validate_applicant_id])

    class Meta:
        model = Applicant
        fields = [
            'user',
            'pk',
            # 'rep_email'
            # 'applicant_id',
            'first_name',
            'last_name',
            'applicant_email',
            'phone_number',
            'street_address',
            'city',
            'state',
            'zip_code',
            'dob',
            'ssn',
            'url',
            'public',
        ]