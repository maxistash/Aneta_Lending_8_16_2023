# this can be used for forms, models
from rest_framework import serializers
from .models import Bank
# from banks.models import Bank
from rest_framework.validators import UniqueValidator


def validate_bank(value):
        # may try something here where we filter twice; once by once by bank name and then by apr because that what sales reps use
        queryset = Bank.objects.filter(name__iexact=value)
        # queryset2 = Loan.objects.filter(bank__iexact=value)
        if queryset.exists():
            # if queryset2.exists():
            raise serializers.ValidationError(f'We already have a bank named {value}')
        return value

# def validate_bank_not_allowed(value):
#       if 'good' in value.lower():
#             raise serializers.ValidationError(f'{value} is not allowed')
#       return value

# unique_bank_id = UniqueValidator(queryset=Loan.objects.all(), lookup='iexact')