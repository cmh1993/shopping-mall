from django.db import models
from mall.goods.goods_model import Goods
from .color_option_model import Color

class Size(models.Model):
    goods_code = models.ForeignKey(Goods, related_name="Size", on_delete=models.CASCADE)
    color_code = models.ForeignKey(Color, related_name="Size", on_delete=models.CASCADE)
    size_code = models.CharField(max_length=10)

    def __str__(self):
        return '%s : %s' %(self.color_code, self.size_code)
