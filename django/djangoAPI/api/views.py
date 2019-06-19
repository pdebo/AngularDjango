from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets

from djangoAPI.api.models import Article
from djangoAPI.api.serializers import ArticleSerializer, UserSerializer

from djangoAPI.api.models import Tips, WhoAreWe
from djangoAPI.api.serializers import TipsSerializer, WhoAreWeSerializer

from rest_framework.response import Response
from rest_framework import status

from djangoAPI.api.serializers import ImageSerializer

from djangoAPI.api.models import Image


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

class ImageUploadView(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):

      image_serializer = ImageSerializer(data=request.data)

      if image_serializer.is_valid():
          image_serializer.save()
          return Response(image_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)