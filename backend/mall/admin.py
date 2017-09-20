from django.contrib import admin

from accounts.models import User
from men.models import SweaterForMen

admin.site.register(User)
admin.site.register(SweaterForMen)