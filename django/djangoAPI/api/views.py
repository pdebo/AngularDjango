from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets

from djangoAPI.api.models import Article
from djangoAPI.api.serializers import ArticleSerializer, UserSerializer

from djangoAPI.api.models import Tips, WhoAreWe
from djangoAPI.api.serializers import TipsSerializer, WhoAreWeSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class TipsViewSet(viewsets.ModelViewSet):
    queryset = Tips.objects.all()
    serializer_class = TipsSerializer

class WhoAreWeViewSet(viewsets.ModelViewSet):
    queryset = WhoAreWe.objects.all()
    serializer_class = WhoAreWeSerializer