from rest_framework import serializers
from .goods_model import Goods
from mall.category.category_model import HighCategory, LowCategory
from mall.override.slug import SlugRelatedModuleField

class GoodsSerializer(serializers.ModelSerializer):
    high_category = SlugRelatedModuleField(
        queryset=HighCategory.objects.all(),
        slug_field='gender'
    )
    low_category = SlugRelatedModuleField(
        queryset=LowCategory.objects.all(),
        slug_field='group_name'
    )
    class Meta:
        model = Goods
        fields = ('high_category', 'low_category',
                  'style_num', 'goods_name', 'goods_price', 'goods_detail',
                  'goods_color', 'goods_size', 'goods_created', 'goods_cnt')

