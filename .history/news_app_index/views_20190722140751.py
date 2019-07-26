from django.shortcuts import render
import feedparser

# Create your views here.
from django.http import HttpResponse


def index(request):
    url = 'https://www.djangoproject.com/rss/weblog/'

    feed = feedparser.parse(url)

    return render(request, 'rss/reader.html')
