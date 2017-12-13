from rest_framework import viewsets

from .size_option_model import Size
from .color_option_model import Color
from .stock_option_model import Stock
from .options_serializers import Color_Option_Serializer, Size_Option_Serializer, Stock_Option_Serializer


class Color_Option_ViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = Color_Option_Serializer

class Size_Option_ViewSet(viewsets.ModelViewSet):
    queryset = Size.objects.all()
    serializer_class = Size_Option_Serializer

class Stock_Option_ViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = Stock_Option_Serializer
