from django.db import models
from django.utils import timezone
from taggit.managers import TaggableManager
from users.models import User
from django_countries.fields import CountryField
from ckeditor.fields import RichTextField
# Create your models here.
JOB_TYPE = (
    ("Full Time",'Full Time'),
    ('Part Time','Part Time'),
    ('Internship','Internship'),
)
LOC_TYPE =(
    ('Remote','Remote'),
    ('Office','Office'),
    ('Remote and Office','Remote and Office'),
)

GENDER_CHOICES = (
    ('male','Male'),
    ('female','Female'),
    ('not specify','Not Specify')
)

class Job(models.Model):
    title = models.CharField(max_length=50)
    description = RichTextField()
    location = models.CharField(max_length=50)
    location_type = models.CharField(choices=LOC_TYPE,max_length=30)
    company_name = models.CharField(max_length=50)
    salary = models.IntegerField(default=0,blank=True)
    company_website = models.CharField(max_length=50,default="")
    posted_at = models.DateTimeField(default=timezone.now)
    last_date = models.DateTimeField()
    type = models.CharField(choices=JOB_TYPE,max_length=30)
    category = models.CharField(max_length=50)
    tags = TaggableManager()

    class Meta:
        ordering = ["last_date"]
    
    def __str__(self):
        return self.title

class Applicant(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True,related_name='applicant')
    full_name = models.CharField(max_length=50)
    gender = models.CharField(choices=GENDER_CHOICES,max_length=20)
    image = models.ImageField(upload_to="applicant_images",null=True,blank=True)
    country = CountryField(null=True,blank=True)
    location = models.CharField(max_length=50,null=True,blank=True)
    resume = models.FileField(upload_to='resumes',null=True,blank=True)

    def __str__(self):
        return self.user.username

STATUS_CHOICES =(
    ('1','Pending'),
    ('2','Accepted'),
    ('3','Rejected'),
)
class JobsApplied(models.Model):
    job = models.ForeignKey(Job,related_name='jobs_applied',on_delete=models.CASCADE)
    user = models.ForeignKey(User,related_name='user_applicant',on_delete=models.CASCADE)
    status = models.CharField(choices=STATUS_CHOICES,default=1,max_length=20)
    date_apply = models.DateTimeField(default=timezone.now)
    class Meta:
        ordering = ["id"]
        unique_together= ['job','user']


    def __str__(self):
        return self.job.title + " | " + self.user.username + " | " + self.get_status_display()
    



