from django.contrib import admin
from .models import *

class JobAdmin(admin.ModelAdmin):
    list_display = ('title','company_name','location','salary')
    search_fields =['title','category','tags__name']
class JobAppliedAdmin(admin.ModelAdmin):
    list_filter = ('date_apply',)
    list_display = ('job','user','status')
    search_fields = ['user','job']

# Register your models here.
admin.site.register(Job,JobAdmin)
admin.site.register(Applicant)
admin.site.register(JobsApplied,JobAppliedAdmin)