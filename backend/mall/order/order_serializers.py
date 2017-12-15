from rest_framework import serializers
from .order_item_model import OrderItem
from .order_model import Order

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'user', 'created_order','order', 'order_total_amount', 'goods')

class OrderSerializer(serializers.ModelSerializer):
    OrderItem = OrderItemSerializer(read_only=True, many=True)
    class Meta:
        model = Order
        fields = ('id', 'user', 'OrderItem')

