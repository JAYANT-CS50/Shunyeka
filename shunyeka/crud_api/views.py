from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from .models import Userdata
from .serializers import UserdataSerializer
from rest_framework.response import Response
from rest_framework import viewsets

class UserdataVS(viewsets.ModelViewSet):
    serializer_class = UserdataSerializer

    def get_queryset(self):
        # Provide the logic to retrieve and return the queryset
        return Userdata.objects.all()
      
