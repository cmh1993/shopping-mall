from rest_framework.viewsets import ModelViewSet
from django.db.models import Model
from rest_framework import response
import json
from rest_framework.decorators import list_route
from rest_framework.response import Response


class ModelViewSet(ModelViewSet):

    @list_route()
    def sample_field(self, request):
        desired_field = request.data.get('field', None)
        if not desired_field:
            return response # pseudocode

        values = Model.objects.all().values_list(desired_field, flat=True)
        # serialize this for returning the response
        return Response(json.dumps(values))  # this is an example, you might want to do something mode involved
