from django.http import response
from rest_framework import serializers
from users.models import User
from .models import *
from taggit.serializers import (TagListSerializerField,
                                TaggitSerializer)
                                
class JobSerializer(serializers.ModelSerializer):
    tags = TagListSerializerField()
    class Meta:
        model = Job
        fields = "__all__"


class JobsAppliedSerializer(serializers.ModelSerializer):
    job_name = serializers.SerializerMethodField('get_job_name')
    status_r = serializers.CharField(source='get_status_display',read_only=True)
    class Meta:
        model = JobsApplied
        fields = "__all__"

    def get_job_name(self,obj):
        return obj.job.title
