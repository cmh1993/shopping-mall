from django.db import models

# Create your models here.
class SweaterForMen(models.Model):
    mainImage = models.ImageField('MainImage')
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=30)
    styleNum = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
