from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Bank
from .validators import validate_bank
from api.serializers import UserPublicSerializer

# class BankInlineSerializer(serializers.Serializer):
    # url = serializers.HyperLinkedIdentityField(view_name='bank-detail', lookup_field='id')
class BankSerializer(serializers.ModelSerializer):

    # url = serializers.HyperlinkedIdentityField(view_name='bank-detail', lookup_field='id')
    # applicant_id = serializers.CharField(validators=[validate_applicant_id])

    name = serializers.CharField(validators=[validate_bank], max_length=20)
    class Meta:
        model = Bank
        fields = [
            'id',
            'name',
            'logo',
            'subscription',
            # 'url',
            'public',
        ]