from django.urls import path
from .views import *

urlpatterns = [
    path('cars/', CarsAPIView.as_view(), name='cars'),
    path('cars/<int:pk>/', CarsAPIView.as_view(), name='car-detail')
]