from django.shortcuts import render
from rest_framework.response import Response
from . import serializers
from users.models import User
from .models import *
from rest_framework import permissions, generics,filters
from api.permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view, permission_classes

class JobList(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = serializers.JobSerializer
    filter_backends = [filters.SearchFilter]
    search_fields =['title','category','tags__name']

class JobDetail(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = serializers.JobSerializer

class JobAppliedList(generics.ListCreateAPIView):
    queryset = JobsApplied.objects.all()
    serializer_class = serializers.JobsAppliedSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['user__username']

class JobAppliedDetail(generics.RetrieveAPIView):
    queryset = JobsApplied.objects.all()
    serializer_class = serializers.JobsAppliedSerializer
