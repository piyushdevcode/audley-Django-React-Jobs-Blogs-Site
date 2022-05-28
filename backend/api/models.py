from django.db import models
# from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
from users.models import User
STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    # title of blog 
    title = models.CharField(max_length=200, unique=True)
    
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='posts')
    # to generate URL for post
    slug = models.SlugField(max_length=200, unique=True)

    content = RichTextField()
    
    # if any changes made then when 
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)
    # Published or not 
    # Unpublished or posts still in draft state should not be rendered
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        # Sort in descending order
        ordering = ['-created_on']

    def __str__(self):
        return self.title
    
class Feedback(models.Model):
    name = models.CharField(max_length=25)
    phoneno = models.CharField(max_length=10)
    email = models.EmailField()
    message = models.TextField()
    received_on = models.DateTimeField(auto_now_add= True)

    class Meta: 
        ordering = ['-received_on']

    def __str__(self):
        return self.name + "[" + self.phoneno + "]"

