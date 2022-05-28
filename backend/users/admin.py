from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

class CustomUserAdmin(UserAdmin):
    model = User

# Register your models here.
admin.site.register(User,CustomUserAdmin)