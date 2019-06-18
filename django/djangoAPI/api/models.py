from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    date = models.IntegerField()

