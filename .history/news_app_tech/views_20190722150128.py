from django.shortcuts import render
import feedparser

# Create your views here.


from django.http import HttpResponse


def index(request):
    return HttpResponse("RSS Reader Index View")
