from django.urls import path
from . import views


urlpatterns = [
    path('', views.applicant_list_create_view, name='applicant-view'),
]
#put the value here as the parameter that we are using in the loans.views.py page