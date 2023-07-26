# this can be used for forms, models
from rest_framework import serializers
from .models import Loan
from rest_framework.validators import UniqueValidator


def validate_bank_id(value):
        queryset = Loan.objects.filter(bank_id__iexact=value)
        if queryset.exists():
            raise serializers.ValidationError(f'We already have a Bank listed under the name of {value}')
        return value

# def validate_bank_not_allowed(value):
#       if 'good' in value.lower():
#             raise serializers.ValidationError(f'{value} is not allowed')
#       return value

# unique_bank_id = UniqueValidator(queryset=Loan.objects.all(), lookup='iexact')