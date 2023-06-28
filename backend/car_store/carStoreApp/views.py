from django.shortcuts import render
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *


class CarsAPIView(ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
class CarAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

