from rest_framework import serializers
from .models import  User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'is_superuser', 'first_name', 'last_name', 'address', 'contact_num', 'date_joined')

