from django.db import models
from django.conf import settings
from django.db.models.query import QuerySet
from django.db.models import Q
from banks.models import Bank

User = settings.AUTH_USER_MODEL

class LoanQuerySet(models.QuerySet):
    def is_public(self):
        return self.filter(public=True)
    
    def search(self, query, user=None):
        lookup = Q(apr__icontains=query) | Q(loan_requirement__icontains = query)
        queryset = self.is_public().filter(lookup)
        if user is not None:
            queryset2 = self.filter(user=user).filter(lookup)
            queryset = (queryset | queryset2).distinct()
        return queryset
    

# CREATING A CLASS FOR SEARCHING
class LoanManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return LoanQuerySet(self.model, using=self.db)

    def search(self, query, user=None):
        return self.get_queryset().filter(query, user=user)

# Create your models here.
class Loan(models.Model):
    user = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL)
    loan_requirement = models.TextField(blank=True, null=True)
    apr = models.DecimalField(max_digits=6, decimal_places=2, default=2.99)
    amount = models.DecimalField(max_digits=7, decimal_places=2, default=50000)
    term = models.IntegerField( default = 180)
    dealer_fee = models.DecimalField(max_digits=5, decimal_places=3, default=10.99)
#    THIS SHOULD USUALLY BE SET TO FALSE
    public = models.BooleanField(default=True)
    objects = LoanManager()
    bank = models.ForeignKey(Bank, on_delete=models.CASCADE)

    def is_public(self) -> bool:
        return self.public

    @property
    def tax_credit(self):
        return '%.2f' %(float(self.amount) * .3)
    
    def tax_percentage(self):
        return '30%'
    
    # def __str__(self):
    #     return self.apr