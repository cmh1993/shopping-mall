from django.db import models
from accounts.models import User

class Order(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, related_name="Order", on_delete=models.CASCADE)

    def __str__(self):
        return '%s\'s order # %d' %(self.user, self.id)

