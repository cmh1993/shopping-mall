from rest_framework import viewsets
from .order_item_model import OrderItem
from .order_model import Order
from .order_serializers import OrderItemSerializer, OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


