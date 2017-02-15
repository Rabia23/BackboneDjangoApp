__author__ = 'rabia'
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.provider.models import EventProvider
from apps.event.models import Event
from apps.provider.serializers import EventProviderSerializer
from apps.event.serializers import EventSerializer
from django.db import transaction
from django.template.defaultfilters import slugify


class EventProviderView(APIView):
    def get(self, request, slug=None):
        if slug:
            # events = EventProvider.objects.get(slug=event_provider_slug).events.all()
            providers = EventProvider.objects.filter(slug=slug)
        else:
            providers = EventProvider.objects.all()
        serializer = EventProviderSerializer(providers, many=True)
        return Response(serializer.data)

    @transaction.atomic
    def post(self, request, format=None):
        data = request.data
        if 'slug' not in data:
            data['slug'] = slugify(data['name'])
        serializer = EventProviderSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
