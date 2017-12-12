from django.db import models

class HighCategory(models.Model):
    id = models.IntegerField(primary_key=True)
    gender = models.CharField(max_length=10)

    def __str__(self):
        return self.gender

class LowCategory(models.Model):
    group_name = models.CharField(max_length=50)
    high_category = models.ForeignKey(HighCategory, related_name="LowCategory", on_delete=models.CASCADE)
    code = models.IntegerField(unique=True)

    def __str__(self):
        return self.group_name

