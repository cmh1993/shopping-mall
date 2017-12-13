from django.db import models
from mall.goods.goods_model import Goods

"""
    example]
        BK : 0100
        CH : 0010
    
"""
class Color(models.Model):
    id = models.IntegerField(primary_key=True)
    goods_code = models.ForeignKey(Goods, related_name="Color", on_delete=models.CASCADE)
    color_code = models.CharField(max_length=10)

    def __str__(self):
        return '%s: %s' %(self.goods_code, self.color_code)
