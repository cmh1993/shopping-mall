from rest_framework import serializers
from .goods_model import Goods
from mall.category.category_model import HighCategory, LowCategory
from mall.options.color_option_model import Color
from mall.options.size_option_model import Size
from mall.options.stock_option_model import Stock
from mall.override.slug import SlugRelatedModuleField
from mall.override.pkRelatedField import MyPrimaryKeyRelatedField

class GoodsSerializer(serializers.ModelSerializer):
    high_category = SlugRelatedModuleField(
        queryset=HighCategory.objects.all(),
        slug_field='gender'
    )
    low_category = SlugRelatedModuleField(
        queryset=LowCategory.objects.all(),
        slug_field='group_name'
    )
    Color = MyPrimaryKeyRelatedField(many=True, queryset=Color.objects.all(), required=False)
    Size = MyPrimaryKeyRelatedField(many=True, queryset=Size.objects.all(), required=False)
    Stock = MyPrimaryKeyRelatedField(many=True, queryset=Stock.objects.all(), required=False)
    class Meta:
        model = Goods
        fields = ('high_category', 'low_category',
                  'style_num', 'goods_name', 'goods_price', 'goods_detail',
                  'goods_created', 'Color', 'Size', 'Stock')

