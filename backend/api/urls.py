from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('api/posts/', views.PostList.as_view()),
    path('api/posts/<int:pk>/', views.PostDetail.as_view()),
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('api/feedback',views.FeedbackList.as_view(),name='feedback'),
    path('api/feedback/<int:pk>/',views.FeedbackList.as_view(),name='feedback_detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)