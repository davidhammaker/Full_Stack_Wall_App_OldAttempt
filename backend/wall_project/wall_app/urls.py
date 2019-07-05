from django.urls import path, include
from . import views
from rest_framework import routers

# Instantiate router:
router = routers.DefaultRouter()

# Register router with Post viewset using prefix 'posts'
router.register('posts', views.PostView)

urlpatterns = [
    path('', include(router.urls))
]
