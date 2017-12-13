from rest_framework import serializers
from .option_1_model import Option_1
from .option_2_model import Option_2


class Option_1_Serializer(serializers.ModelSerializer):
    Size = serializers.PrimaryKeyRelatedField(many=True, queryset=Option_2.objects.all(), required=False)
    class Meta:
        model = Option_1
        fields = ('id', 'color_code', 'Size')

class Option_2_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Option_2
        fields = ('id', 'color_code', 'size_code', 'size_stock')

