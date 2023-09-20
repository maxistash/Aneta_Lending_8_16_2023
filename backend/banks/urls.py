from django.urls import path
from . import views

urlpatterns = [
    path('', views.bank_list_create_view, name='bank-view'),
    path('<int:pk>/', views.bank_detail_view, name='bank-detail')

]
#put the value here as the parameter that we are using in the loans.views.py page