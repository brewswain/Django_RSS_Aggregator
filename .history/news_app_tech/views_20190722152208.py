from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .serializers import FeedSerializer
from .models import Feed

import feedparser

# Create your views here.


from django.http import HttpResponse


def index(request):
    if request.GET.get("url"):
        url = request.GET["url"]
        feed = feedparser.parse(url)
    else:
        feed = None

    return render(request, 'news_app_tech/reader.html', {
        'feed': feed
    })
