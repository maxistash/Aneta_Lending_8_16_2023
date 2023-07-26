from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import Loan


@register(Loan)
class LoanIndex(AlgoliaIndex):
    # should_index = 'is_public'
    fields = [
        'user',
        'bank_id',
        'loan_requirement',
        'term',
        'public'   
]
    settings = {
        'searchableAttributes': ['bank_id', 'loan_requirement'],
        'attributesForFaceting':['user', 'public']
    }