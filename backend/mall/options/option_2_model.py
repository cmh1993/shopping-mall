from django.db import models
from mall.goods.goods_model import Goods
from .option_1_model import Option_1

"""
    Option_2 -> Size
"""
class Option_2(models.Model):
    color_code = models.ForeignKey(Option_1, related_name="Size", on_delete=models.CASCADE)
    size_code = models.CharField(max_length=10)
    size_stock = models.IntegerField(default=0)

    def __str__(self):
        return self.size_code

