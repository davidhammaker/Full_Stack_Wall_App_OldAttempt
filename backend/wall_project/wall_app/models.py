from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Post(models.Model):

    # Use 'on_delete=models.CASCADE' to ensure that posts are deleted if
    # a user is deleted.
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    # A message will not be length-restricted.
    message = models.TextField()

    # The default date_posted will be "timezone.now", which will run at
    # the time of the posting.
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        """
        Defines a string representation for the Post object, composed of
        the author's username and the date.

        :return: The Post object's string representation.
        """
        d = self.date_posted
        return f'{self.author.username}_' \
            f'{d.year}-{d.month}-{d.day}_{d.hour}:{d.minute}:{d.second}'
