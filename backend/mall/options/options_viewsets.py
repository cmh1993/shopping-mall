from rest_framework import viewsets

from .option_2_model import Option_2
from .option_1_model import Option_1
from .options_serializers import Option_1_Serializer, Option_2_Serializer


class Option_1_ViewSet(viewsets.ModelViewSet):
    queryset = Option_1.objects.all()
    serializer_class = Option_1_Serializer

class Option_2_ViewSet(viewsets.ModelViewSet):
    queryset = Option_2.objects.all()
    serializer_class = Option_2_Serializer


