from rest_framework import viewsets

from .models import SweaterForMen
from .serializers import SweaterForMenSerializer

class SweaterForMenViewSet(viewsets.ModelViewSet):
    queryset = SweaterForMen.objects.all()
    serializer_class = SweaterForMenSerializer
