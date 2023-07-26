from rest_framework import serializers
from rest_framework.reverse import reverse
from .models import Loan
from .validators import validate_bank_id
from api.serializers import UserPublicSerializer

class LoanInlineSerializer(serializers.Serializer):
    url = serializers.HyperlinkedIdentityField(view_name='loan-detail', lookup_field='pk')
    bank_id = serializers.CharField(read_only=True)


class LoanSerializer(serializers.ModelSerializer):
    owner = UserPublicSerializer(source='user', read_only=True)
    # WE DO THIS IF WE WANT TO SEE ALL OF THE RELATED LOANS BASED ON THE USER
    # related_loans = LoanInlineSerializer(source='user.loan_set.all', many=True, read_only=True)
    my_tax_percentage = serializers.SerializerMethodField(read_only=True)
    edit_url = serializers.SerializerMethodField(read_only=True)
    url = serializers.HyperlinkedIdentityField(view_name='loan-detail', lookup_field='pk')
    # email = serializers.EmailField(source='user.email', read_only=True)
    # USE THIS IF YOU WANT INFORMATION ABOUT THE USER ASSOCIATED WITH ANYTHING THEY CREATE SPECIFICALLY, SO SAY IN THE FUTURE YOU 
    # WANT TO ADD AN EMAIL AND FIRST AND LAST NAME TO THE CUSTOMER THAT CORRESPONDS TO THE SALES REP FOR ANALYTICS PURPOSES 
    
    bank_id = serializers.CharField(validators=[validate_bank_id])
    class Meta:
        model = Loan
        fields = [
            'owner',
            'pk',
            'bank_id',
            'loan_requirement',
            'apr',
            'amount',
            'term',
            'dealer_fee',
            'tax_credit',
            'my_tax_percentage',
            # 'email',
            'url',
            'edit_url',
            # 'related_loans',
            'public'
            #attributes
        ]

    # def validate_bank_id(self, value):
    #     request = self.context.get('request')
    #     user = request.user
    #     queryset = Loan.objects.filter(bank_id_iexact=value)
    #     if queryset.exists():
    #         raise serializers.ValidationError(f'We already have a Bank listed under the name of {value}')
    #     return value

    # def create(self, validated_data):
    #     # return Loan.objects.create(**validated_data)
    #     # email = validated_data.pop('email')
    #     obj = super().create(validated_data)
    #     # print(email, obj)
    #     return obj
    
    # def update(self, instance, validated_data):
    #     instance.bank_id = validated_data.get('bank_id')
    #     return instance
       
       
        # this allows us to change the name of the item so that someone cannot get directly into the database by looking at whats in the url
        # huge safety thing
    def get_edit_url(self, obj):
        request = self.context.get('request')
        if request is None:
            return None
        return reverse('loan-edit', kwargs={'pk':obj.pk}, request=request)
    
    def get_my_tax_percentage(self, obj):
        
        if not hasattr(obj, 'id'):
            return None
        if not isinstance(obj, Loan):
            return None    
        return obj.tax_percentage()
        
        # print(obj.id) will show the id of whichever object im grabbing
        #this means that i can grab different attributes of the object whenever    