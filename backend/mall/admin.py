from django.contrib import admin
from accounts.models import User
from mall.category.category_model import HighCategory, LowCategory
from mall.goods.goods_model import Goods
from mall.options.option_1_model import Option_1
from mall.options.option_2_model import Option_2
from men.models import SweaterForMen

admin.site.register(User)

admin.site.register(SweaterForMen)

admin.site.register(HighCategory)
admin.site.register(LowCategory)

admin.site.register(Goods)

admin.site.register(Option_1)
admin.site.register(Option_2)
