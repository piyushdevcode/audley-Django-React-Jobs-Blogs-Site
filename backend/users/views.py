from django.shortcuts import render
from .serializers import ApplicantSerializer
from jobs.models import *
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status,filters,generics

# Create your views here.

class ApplicantList(generics.ListAPIView):
    queryset = Applicant.objects.all()
    parser_classes = (MultiPartParser,FormParser)
    serializer_class = ApplicantSerializer
    filter_backends = [filters.SearchFilter]
    search_fields =['user__username']

    
    def post(self,request,*args,**kwargs):
        applicants_serializer = ApplicantSerializer(data=request.data)

        if applicants_serializer.is_valid():
            applicants_serializer.save()
            return Response(applicants_serializer.data,status=status.HTTP_201_CREATED)
        
        else:
            print('error',applicants_serializer.errors)
            return Response(applicants_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class ApplicantDetail(generics.RetrieveUpdateAPIView):
    queryset = Applicant.objects.all()
    serializer_class = ApplicantSerializer

