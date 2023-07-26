from django.urls import path
from . import views


urlpatterns = [
    path('', views.loan_list_create_view, name='loan-list'),
    path('<int:pk>/update/', views.loan_update_view, name='loan-edit'),
    path('<int:pk>/delete/', views.loan_delete_view),
    path('<int:pk>/', views.loan_detail_view, name='loan-detail')
]
#put the value here as the parameter that we are using in the loans.views.py page