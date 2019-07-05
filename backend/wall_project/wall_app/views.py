from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer


# We will inherit from ModelViewSet so that we can handle multiple types
# of requests.
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
