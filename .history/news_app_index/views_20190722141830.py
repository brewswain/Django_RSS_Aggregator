from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .serializers import FeedSerializer
from .models import Feed
from django.http import HttpResponse

import feedparser

# Create your views here.


def index(request):
    if request.GET.get("url"):
        url = request.GET["url"]
        feed = feedparser.parse(url)
    else:
        feed = None

    return render(request, 'news_app_index/reader.html', {
        'feed': feed
    })


@csrf_exempt
def rest_feeds(request):
    if request.method == "GET":
        feeds = Feed.objects.all()
        serializer = FeedSerializer(feeds, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = FeedSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)


@csrf_exempt
def rest_feeds_detail(request, pk):
    try:
        feed = Feed.objects.get(pk=pk)
    except Feed.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = FeedSerializer(feed)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = FeedSerializer(feed, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)

        return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        feed.delete()
        return HttpResponse()
