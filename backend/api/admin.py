from django.contrib import admin
from .models import *
from django.utils.translation import gettext, gettext_lazy as _
class PostAdmin(admin.ModelAdmin):
    list_display = ('title','author' ,'slug', 'status','created_on')
    # filter post on basis of status (published or not)
    list_filter = ("status",)
    # search in database 
    search_fields = ['title', 'content']
    # Automatically fills the slug part

    prepopulated_fields = {'slug': ('title',)}

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('email','phoneno','message','received_on',)
    list_filter = ('received_on',)
    search_fields = ['message']

    class Meta: 
        model = Feedback

admin.site.register(Post, PostAdmin)
admin.site.register(Feedback,FeedbackAdmin)