from rest_framework import viewsets


from .goods_model import Goods
from .goods_serializers import GoodsSerializer


class GoodsViewSet(viewsets.ModelViewSet):
    queryset = Goods.objects.all()
    serializer_class = GoodsSerializer


