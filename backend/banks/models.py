from django.db import models
from django.conf import settings
# from loans.models import Loan

# Create your models here.
class Bank(models.Model):
    name = models.TextField(max_length=30)
    logo = models.ImageField(default='404')
    subscription = models.BooleanField(default=False)
    public = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name
    
    # def __repr__(self):
    #     return f"{self.name} has a {self.loan.apr} loan"