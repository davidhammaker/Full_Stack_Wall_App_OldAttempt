from django.shortcuts import render, HttpResponse
from .forms import WallUserCreationForm


def register(request):
    if request.method == 'POST':
        form = WallUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
    return HttpResponse('OK')
