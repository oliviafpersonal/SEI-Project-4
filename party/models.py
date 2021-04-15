from django.db import models

class party(models.Model):
    name = models.CharField(max_length=50, default="Conservative")

    def __str__(self):
        return f"{self.name}"
