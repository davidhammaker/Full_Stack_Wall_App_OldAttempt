from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        d = self.date_posted
        return f'{self.author.username}_' \
            f'{d.year}-{d.day}-{d.month}_{d.hour}:{d.minute}:{d.second}'
