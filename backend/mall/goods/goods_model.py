from django.db import models
from mall.category.category_model import HighCategory, LowCategory

class Goods(models.Model):
    style_num = models.IntegerField(primary_key=True)
    high_category = models.ForeignKey(HighCategory, related_name="Goods", on_delete=models.CASCADE)
    low_category = models.ForeignKey(LowCategory, related_name="Goods", on_delete=models.CASCADE)
    goods_name = models.CharField(max_length=100)
    goods_price = models.CharField(max_length=30)
    goods_detail = models.TextField()
    goods_created = models.DateField(auto_now_add=True)


    def __unicode__(self):
        return self.goods_name

    def __str__(self):
        return self.goods_name

