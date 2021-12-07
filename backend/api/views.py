from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from api import serializers
from django.contrib.auth.models import User
from .models import Feedback, Post
from rest_framework import permissions
from api.permissions import IsOwnerOrReadOnly

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    

class PostList(generics.ListAPIView):
    # Shows only published posts
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    serializer_class = serializers.PostSerializer
    # only authenticated user or admin can modify post
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]

# For GET and POST
class FeedbackList(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = serializers.FeedbackSerilaizer

class FeedbackDetail(generics.RetrieveAPIView):
    queryset = Feedback.objects.all()
    serializers_class = serializers.FeedbackSerilaizer

# @api_view(['POST'])
