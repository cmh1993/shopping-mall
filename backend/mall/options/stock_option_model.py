from django.db import models
from mall.goods.goods_model import Goods
from mall.options.color_option_model import Color
from mall.options.size_option_model import Size

class Stock(models.Model):
    goods_code = models.ForeignKey(Goods, related_name="Stock", on_delete=models.CASCADE)
    color_code = models.ForeignKey(Color, related_name="Stock", on_delete=models.CASCADE)
    size_code = models.ForeignKey(Size, related_name="Stock", on_delete=models.CASCADE)
    stock_num = models.IntegerField(default=0)

    def __str__(self):
        return '%s : %s : %s : %d' % (self.goods_code, self.color_code, self.size_code, self.stock_num)

