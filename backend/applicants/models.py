from django.db import models
from django.conf import settings

user = settings.AUTH_USER_MODEL
# Create your models here.
class Applicant(models.Model):
    applicant_id = models.CharField(primary_key=True, max_length=10)
    first_name = models.CharField(max_length=30)
    last_name =  models.CharField(max_length=30)
    applicant_email = models.EmailField()
    phone_number = models.IntegerField()
    street_address = models.CharField(max_length=50)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=15)
    zip_code = models.IntegerField()
    dob = models.DateField()
    user = models.ForeignKey(user, default=1, null=True,on_delete=models.SET_NULL)
    public = models.BooleanField(default=True)
    
    