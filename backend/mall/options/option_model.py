from django.db import models

class Color(models.Model):
    color_code = models.CharField(primary_key=True, max_length=10)
    color_name = models.CharField(max_length=30)

    def __str__(self):
        return self.color_code


class Size(models.Model):
    size_code = models.CharField(primary_key=True, max_length=10)
    size_name = models.CharField(max_length=20)

    def __str__(self):
        return self.size_code

