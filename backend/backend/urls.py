"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token


from django.conf.urls.static import static
from django.conf import settings

from accounts.views import UserViewSet
from men.views import SweaterForMenViewSet

# Category
from mall.category.category_viewsets import HighCategoryViewSet
from mall.category.category_viewsets import LowCategoryViewSet
# Goods
from mall.goods.goods_viewsets import GoodsViewSet
# Options
from mall.options.options_viewsets import Option_1_ViewSet, Option_2_ViewSet

router = routers.DefaultRouter()
router.register(r'accounts', UserViewSet)

router.register(r'HighCategory', HighCategoryViewSet)
router.register(r'LowCategory', LowCategoryViewSet)

router.register(r'Goods', GoodsViewSet)

router.register(r'Color', Option_1_ViewSet)
router.register(r'Size', Option_2_ViewSet)


router.register(r'men/sweaters', SweaterForMenViewSet)



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    # Token authentication -> curl -X POST -d "login_id=....&password=...." http://127.0.0.1:8000/api-token-auth/
    url(r'^api-token-auth/', obtain_jwt_token),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
