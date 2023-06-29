from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *


class CarsAPIView(ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
class CarAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

