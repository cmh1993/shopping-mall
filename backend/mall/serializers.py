from rest_framework import serializers
from .models import Goods

class GoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goods
        fields = ('high_category', 'low_category',
                  'style_num', 'goods_name', 'goods_price', 'goods_detail',
                  'goods_color', 'goods_size', 'goods_created')

# class LowCategorySerializer(serializers.ModelSerializer):
#     high_category = serializers.SlugRelatedField(
#         many=False,
#         read_only=True,
#         slug_field='gender'
#     )
#     class Meta:
#         model = LowCategory
#         fields = ('id', 'high_category', 'group_name', 'code')
#
#
