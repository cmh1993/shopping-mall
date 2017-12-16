from django.db import models
from mall.category.category_model import HighCategory, LowCategory

class Goods(models.Model):
    style_num = models.IntegerField(primary_key=True)
    high_category = models.ForeignKey(HighCategory, related_name="Goods", on_delete=models.CASCADE)
    low_category = models.ForeignKey(LowCategory, related_name="Goods", on_delete=models.CASCADE)
    goods_name = models.CharField(max_length=100, unique=True)
    goods_price = models.CharField(max_length=30)
    goods_detail = models.TextField()
    goods_created = models.DateField(auto_now_add=True)
    goods_mainImage = models.ImageField('MainImage')
    goods_subImage = models.ImageField('SubImage', null=True, blank=True)
    goods_subImage2 = models.ImageField('SubImage2', null=True, blank=True)

    def __str__(self):
        return self.goods_name

