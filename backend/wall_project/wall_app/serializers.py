from rest_framework import serializers
from .models import Post


# This serializer needs to be standard for a model, so it will inherit
# from ModelSerializer.
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'author', 'message', 'date_posted')
