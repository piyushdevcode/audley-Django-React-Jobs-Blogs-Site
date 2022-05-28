from django.db import models
from django.utils import timezone
from taggit.managers import TaggableManager
# Create your models here.
JOB_TYPE = (
    ("Full Time",'Full Time'),
    ('Part Time','Part Time'),
    ('Intership','Intership'),
)
LOC_TYPE =(
    ('Remote','Remote'),
    ('Office','Office'),
    ('Remote and Office','Remote and Office'),
)
class Job(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    location = models.CharField(max_length=50)
    location_type = models.CharField(choices=LOC_TYPE,max_length=30)
    company_name = models.CharField(max_length=50)
    salary = models.IntegerField(default=0,blank=True)
    company_website = models.CharField(max_length=50,default="")
    posted_at = models.DateTimeField(default=timezone.now)
    last_date = models.DateTimeField()
    type = models.CharField(choices=JOB_TYPE,max_length=30)
    tags = TaggableManager()
    category = models.CharField(max_length=50)

    class Meta:
        ordering = ["last_date"]
    
    def __str__(self):
        return self.title


