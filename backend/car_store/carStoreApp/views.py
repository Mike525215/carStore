from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *

class CarsAPIView(APIView):

    def get(self, request, *args, **kwargs):
        if kwargs.get('pk'):
            queryset = Car.objects.get(id=kwargs.get('pk'))
            serializer = CarSerializer(queryset)
        else:
            queryset = Car.objects.all()
            serializer = CarSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CarSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        queryset = Car.objects.get(id=kwargs.get('pk'))
        serializer = CarSerializer(data=request.data, instance=queryset)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        car = Car.objects.filter(id=kwargs.get('pk'))
        serializer = CarSerializer(car[0])
        car.delete()
        return Response(serializer.data)

