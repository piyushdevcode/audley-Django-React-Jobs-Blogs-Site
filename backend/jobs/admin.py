from django.contrib import admin
from .models import *

class JobAdmin(admin.ModelAdmin):
    pass

# Register your models here.
admin.site.register(Job,JobAdmin)