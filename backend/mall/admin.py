from django.contrib import admin
from accounts.models import User
from mall.category.category_model import HighCategory, LowCategory
from mall.goods.goods_model import Goods
from mall.options.color_option_model import Color
from mall.options.size_option_model import Size
from mall.options.stock_option_model import Stock
from mall.order.order_model import Order
from mall.order.order_item_model import OrderItem


from men.models import SweaterForMen

admin.site.register(User)

admin.site.register(SweaterForMen)
# Category
admin.site.register(HighCategory)
admin.site.register(LowCategory)
# Goods
admin.site.register(Goods)
# Goods options
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Stock)
# Order
admin.site.register(Order)
admin.site.register(OrderItem)