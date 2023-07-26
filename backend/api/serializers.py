from rest_framework import serializers


# THIS IS JUST ABOUT GETTING NESTED DATA
class UserLoanInlineSerializer(serializers.Serializer):
    url = serializers.HyperlinkedIdentityField(view_name='loan-detail', lookup_field='pk')
    bank_id = serializers.CharField(read_only=True)

class UserPublicSerializer(serializers.Serializer):
    username = serializers.CharField(read_only=True)
    # id = serializers.IntegerField(read_only=True)
    # other_loans = serializers.SerializerMethodField(read_only=True)

    # def get_other_loans(self, obj):
    #     user = obj
    #     my_loans_queryset = user.loan_set.all()[:5]
    #     return UserLoanInlineSerializer(my_loans_queryset, many=True,
    #                                     context=self.context).data