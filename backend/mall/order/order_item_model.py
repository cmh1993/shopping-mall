from django.db import models
from accounts.models import User
from .order_model import Order
from mall.goods.goods_model import Goods

class OrderItem(models.Model):
    user = models.ForeignKey(User, related_name="OrderItem", on_delete=models.CASCADE)
    goods = models.ForeignKey(Goods, related_name="OrderItem", on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name="OrderItem", on_delete=models.CASCADE)
    created_order = models.DateField(auto_now_add=True)
    order_total_amount = models.CharField(max_length=100)
    created_order = models.DateField(auto_now_add=True)


    def __str__(self):
        return '%s' %(self.order)