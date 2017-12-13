from rest_framework import serializers
from .goods_model import Goods
from mall.category.category_model import HighCategory, LowCategory
from mall.options.option_1_model import Option_1
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
    Color = serializers.PrimaryKeyRelatedField(many=True, queryset=Option_1.objects.all(), required=False)

    class Meta:
        model = Goods
        fields = ('high_category', 'low_category',
                  'style_num', 'goods_name', 'goods_price', 'goods_detail',
                  'goods_created', 'Color')

