__author__ = 'rabia'
from apps.provider.models import EventProvider
from rest_framework import serializers


class EventProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventProvider