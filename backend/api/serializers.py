from django.http import response
from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post , Feedback


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Post
        fields = ['author','title', 'slug','created_on','content','status']

class UserSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'posts']

class FeedbackSerilaizer(serializers.ModelSerializer):
    
    class Meta:
        model = Feedback
        fields = ['name','phoneno','email','message','received_on']