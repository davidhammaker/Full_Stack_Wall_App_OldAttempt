from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class WallUserCreationForm(UserCreationForm):

    # We want to include the email field in the form
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
