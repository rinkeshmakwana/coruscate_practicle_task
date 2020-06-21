from django.shortcuts import render

from coruscate.pagination import StandardResultsSetPagination

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView

from .models import Post
from .serializers import PostSerializer


class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination


class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
