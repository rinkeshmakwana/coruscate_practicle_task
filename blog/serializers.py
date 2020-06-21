from rest_framework import serializers
from .models import Post, Author


class PostSerializer(serializers.ModelSerializer):
    authorId = serializers.StringRelatedField()
    class Meta:
        model = Post
        fields = '__all__'
        