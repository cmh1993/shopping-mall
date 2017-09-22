from rest_framework import viewsets
from django.contrib.auth.hashers import make_password

from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # Encrypted password
    def perform_create(self, serializer):
        hashed_password = make_password(serializer.validated_data['password'])  # get the hashed password
        serializer.validated_data['password'] = hashed_password
        user = super(UserViewSet, self).perform_create(serializer)  # create user
