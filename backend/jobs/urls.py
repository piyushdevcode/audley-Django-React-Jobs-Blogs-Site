from django.urls import path
from . import views

urlpatterns =[
    path('api/jobs',views.JobList.as_view(),name='jobs-list'),
     path('api/jobs/<int:pk>/',
         views.JobDetail.as_view(),
         name='job-detail'),
    path('api/jobsapplied',views.JobAppliedList.as_view(),name='jobs-applied'),
    path('api/jobsapplied/<int:pk>/',views.JobAppliedDetail.as_view(),name='jobs-applied-detail'),
    path('api/jobsapplied/<str:username>/',views.JobAppliedDetail.as_view(),name='jobs-applied-detail'),

]