from rest_framework import serializers
from .color_option_model import Color
from .size_option_model import Size
from .stock_option_model import Stock
from mall.override.pkRelatedField import MyPrimaryKeyRelatedField

class Color_Option_Serializer(serializers.ModelSerializer):
    Size = MyPrimaryKeyRelatedField(many=True, queryset=Size.objects.all(), required=False)
    class Meta:
        model = Color
        fields = ('id', 'color_code', 'Size')

class Size_Option_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ('id', 'goods_code', 'color_code', 'size_code')

class Stock_Option_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ('id', 'goods_code', 'color_code', 'size_code', 'stock_num')


