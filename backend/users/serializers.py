from rest_framework import serializers
from jobs.models import *

class ApplicantSerializer(serializers.ModelSerializer):
    # user = serializers.CharField()
    class Meta:
        model = Applicant
        fields = '__all__'
