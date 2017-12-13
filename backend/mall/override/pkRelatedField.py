from django.utils import six
from rest_framework import serializers

class MyPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):

    def to_representation(self, value):
        return six.text_type(value) # returns the string(Python3)/ unicode(Python2) representation now instead of pk