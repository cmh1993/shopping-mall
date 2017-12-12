from rest_framework import serializers
from .category_model import HighCategory, LowCategory
from mall.override.slug import SlugRelatedModuleField
from mall.goods.goods_model import Goods

class HighCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = HighCategory
        fields = ('id', 'gender')

"""

    Product Code...
    Outwear - 100
    Sweaters - 101

"""

class LowCategorySerializer(serializers.ModelSerializer):
    high_category = SlugRelatedModuleField(
        queryset=HighCategory.objects.all(),
        slug_field='gender'
    )
    Goods = serializers.PrimaryKeyRelatedField(many=True, queryset=Goods.objects.all(), required=False)

    class Meta:
        model = LowCategory
        fields = ('id', 'high_category', 'group_name', 'code', 'Goods')
