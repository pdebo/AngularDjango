from django.db import models
from unixtimestampfield.fields import UnixTimeStampField


class Article(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    date = UnixTimeStampField(auto_now_add=True, use_numeric=True)
    author = models.CharField(max_length=64)


class Tips(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    date = UnixTimeStampField(auto_now_add=True, use_numeric=True)
    author = models.CharField(max_length=64)


class WhoAreWe(models.Model):
    title = models.CharField(max_length=64)
    desc = models.CharField(max_length=300)
    content = models.CharField(max_length=3000)
    pictureUrl = models.CharField(max_length=300)


class Image(models.Model):
    image = models.ImageField(blank=False, null=False)

    def __str__(self):
        return self.image.name
