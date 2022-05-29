from django.urls import path
from . import views

urlpatterns = [
    path('api/applicants/', views.ApplicantList.as_view(), name= 'applicants-list'),
    path('api/applicants/<int:pk>',views.ApplicantDetail.as_view(),name='applicants-detail')
]