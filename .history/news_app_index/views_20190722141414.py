from django.shortcuts import render
import feedparser

# Create your views here.
from django.http import HttpResponse


def index(request):
    if request.GET.get("url"):
        url = request.GET["url"]
        feed = feedparser.parse(url)
    else:
        feed = None

    return render(request, 'news_app_index/reader.html', {
        'feed': feed
    })
