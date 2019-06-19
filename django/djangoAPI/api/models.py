from django.db import models
from unixtimestampfield.fields import UnixTimeStampField

class Article(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    Date = models.DateTimeField()
    author = models.CharField(max_length=64)

class Tips(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    Date = UnixTimeStampField(auto_now_add=True)
    author = models.CharField(max_length=64)

class WhoAreWe(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)

