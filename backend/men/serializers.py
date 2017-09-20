from rest_framework import serializers
from .models import  SweaterForMen

class SweaterForMenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SweaterForMen
        fields = ('id', 'mainImage', 'name', 'price', 'styleNum', 'description')
