from django.contrib import admin

from accounts.models import User
from mall.category.category_model import HighCategory, LowCategory
from mall.options.option_model import Size, Color
from men.models import SweaterForMen

admin.site.register(User)
admin.site.register(SweaterForMen)
admin.site.register(HighCategory)
admin.site.register(LowCategory)
admin.site.register(Size)
admin.site.register(Color)
