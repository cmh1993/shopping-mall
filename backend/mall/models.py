from django.db import models
from mall.options.option_model import Color, Size
from mall.category.category_model import HighCategory, LowCategory

class Goods(models.Model):
    style_num = models.IntegerField(primary_key=True)
    high_category = models.ForeignKey(HighCategory, related_name="Goods", on_delete=models.CASCADE)
    low_category = models.ForeignKey(LowCategory, related_name="Goods", on_delete=models.CASCADE)
    goods_name = models.CharField(max_length=100)
    goods_price = models.CharField(max_length=30)
    goods_detail = models.TextField()
    goods_color = models.ForeignKey(Color, related_name="Goods", on_delete=models.CASCADE)
    goods_size = models.ForeignKey(Size, related_name="Goods", on_delete=models.CASCADE)
    goods_created = models.DateTimeField(auto_now_add=True)


