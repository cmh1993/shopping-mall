from django.db import models


"""
    
    men : 10
    women : 11

"""
class HighCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    gender = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.gender

class LowCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    group_name = models.CharField(max_length=50, unique=True)
    high_category = models.ForeignKey(HighCategory, related_name="LowCategory", on_delete=models.CASCADE)

    def __str__(self):
        return self.group_name

