from django.urls import path,re_path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from knox import views as knox_views

urlpatterns = format_suffix_patterns([
    
    # ROOT 
    path('',
         views.api_root,
         name='API_ROOT'),

    # ------------------ USER -------------
    path('api/users/',
         views.UserList.as_view(), name='user-list'),
    path('api/users/<int:pk>/',views.UserDetail.as_view(),name='user-detail'),
    re_path(r'^api/users/(?P<username>\w{0,50})/$',views.UserDetail.as_view(),name='user-detail'),

    # ------- SIGN UP ,LOGIN & LOGOUT ----------
    path('api/user/register/',
         views.RegisterAPI.as_view(),
         name='register'),
    path('api/user/login',
         views.LoginAPIView.as_view(),
         name='login'),
    path('api/user/logout',
         knox_views.LogoutView.as_view(),
         name='logout'),
    path('api/user/logoutall',
         knox_views.LogoutAllView.as_view(),
         name='logoutall'),
    
    # ----------- POSTS ---------------
    path('api/posts/',
         views.PostList.as_view(),
         name='post-list'),
    path('api/posts/<int:pk>/',
         views.PostDetail.as_view(),
         name='post-detail'),
    # path('api/posts/<slug:slug>/', views.PostDetail.as_view(), name='post_detail_bySlug'),

    # -------------- FEEDBACK --------------
    path('api/feedback',
         views.FeedbackList.as_view(),
         name='feedback-list'),
    path('api/feedback/<int:pk>/',
         views.FeedbackDetail.as_view(),
         name='feedback-detail'),
])

# urlpatterns = format_suffix_patterns(urlpatterns)
