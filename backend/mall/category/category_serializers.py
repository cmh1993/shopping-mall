from rest_framework import serializers
from .category_model import HighCategory, LowCategory
from mall.override.slug import SlugRelatedModuleField


class HighCategorySerializer(serializers.ModelSerializer):
    # def to_representation(self, instance):
    #     return instance.gender

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
    class Meta:
        model = LowCategory
        fields = ('id', 'high_category', 'group_name', 'code')
