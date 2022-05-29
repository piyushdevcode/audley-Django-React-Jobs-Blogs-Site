from django.http import response
from rest_framework import serializers
from users.models import User
from .models import *

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = "__all__"


class JobsAppliedSerializer(serializers.HyperlinkedModelSerializer):
   
    class Meta:
        model = JobsApplied
        fields = "__all__"
        # depth = 1
        extra_kwargs = {
            'url': {'view_name': 'jobs-applied-detail'},
        }
    