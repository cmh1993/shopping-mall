from rest_framework import viewsets


from .models import Goods
from .serializers import GoodsSerializer


class GoodsViewSet(viewsets.ModelViewSet):
    queryset = Goods.objects.all()
    serializer_class = GoodsSerializer


