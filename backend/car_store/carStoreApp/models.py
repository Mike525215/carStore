from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    price = models.FloatField(blank=True)
    image = models.URLField(blank=True)

