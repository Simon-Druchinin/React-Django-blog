from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=128)
    icon = models.CharField(max_length=64)
    url_path = models.CharField("url_path", max_length=128)
    parent_id = models.IntegerField()
