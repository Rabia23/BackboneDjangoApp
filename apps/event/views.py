__author__ = 'rabia'
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.event.models import Event
from apps.provider.models import EventProvider
from apps.event.serializers import EventSerializer
from django.db import transaction
from django.template.defaultfilters import slugify


class EventView(APIView):
    def get(self, request, slug=None):
        if slug:
            events = Event.objects.filter(slug=slug)
        else:
            events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    @transaction.atomic
    def post(self, request, format=None):
        data = request.data
        if 'slug' not in data:
            data['slug'] = slugify(data['name'])
        if 'provider_slug' in data:
            data['event_provider'] = EventProvider.objects.filter(slug=data['provider_slug']).values('id')
        serializer = EventSerializer(data=data)
        if serializer.is_valid():
            event = serializer.save()
            if 'images_array' in data:
                event.set_images(data['images_array'])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProviderEventView(APIView):
    def get(self, request, provider_slug=None):
        if provider_slug:
            provider = EventProvider.objects.get(slug=provider_slug)
            events = Event.objects.filter(event_provider=provider)
        # else:
        #     events = Event.objects.all()
            serializer = EventSerializer(events, many=True)
            return Response(serializer.data)
