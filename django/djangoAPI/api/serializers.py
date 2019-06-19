from django.contrib.auth.models import User
from rest_framework import serializers


from djangoAPI.api.models import Tips, Article


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', )


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'url', 'title', 'desc', 'content', 'date', 'author')

class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tips
        fields = ('id', 'url', 'title', 'desc', 'content', 'date', 'author')

class WhoAreWeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tips
        fields = ('id', 'url', 'title', 'desc', 'content')
