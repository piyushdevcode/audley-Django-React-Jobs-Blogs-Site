from django.http import response
from rest_framework import serializers
# from django.contrib.auth.models import User
from users.models import User
from api.models import Post , Feedback


#----------- For serializing the Posts ------

class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    status = serializers.SerializerMethodField()

    def get_status(self,obj):
        if obj.status == True:
            return "Posted"
        else:
            return "Draft state"

    class Meta:
        model = Post
        fields = ['id','author','title','url','slug','created_on','content','status']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(many=True, read_only=True,view_name='post-detail')
    # user_applicant = serializers.HyperlinkedRelatedField(many=True,read_only=True,view_name='jobs-applied-detail',lookup_field='user')

    class Meta:
        model = User
        fields = ['id', 'username', 'email','posts',]

# --------------- For Registering user -----------------
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user

# --------------- Feedback -------------------------
class FeedbackSerilaizer(serializers.ModelSerializer):
    
    class Meta:
        model = Feedback
        fields = ['name','phoneno','email','message','received_on']