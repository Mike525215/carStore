from django.db import models
from django.contrib.auth.models import User
class Car(models.Model):
    make = models.CharField(max_length=100)
    price = models.FloatField(blank=True)
    image = models.URLField(blank=True)
    user = models.CharField(max_length=50)

