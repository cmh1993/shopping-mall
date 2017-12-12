from rest_framework import viewsets

from .category_model import HighCategory, LowCategory
from .category_serializers import HighCategorySerializer, LowCategorySerializer

class HighCategoryViewSet(viewsets.ModelViewSet):
    queryset = HighCategory.objects.all()
    serializer_class = HighCategorySerializer

class LowCategoryViewSet(viewsets.ModelViewSet):
    queryset = LowCategory.objects.all()
    serializer_class = LowCategorySerializer


