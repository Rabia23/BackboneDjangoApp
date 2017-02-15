__author__ = 'rabia'
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.provider.models import EventProvider
import json


class Event(models.Model):
    name = models.CharField(max_length=20, unique=True)
    price = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(500)], null=True, blank=True)
    images = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    days = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(31)], null=True, blank=True)
    event_provider = models.ForeignKey(EventProvider, related_name='events')
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    slug = models.SlugField(max_length=20, unique=True, default='')

    def __str__(self):
        return self.name

    def set_images(self, x):
        self.images = json.dumps(x)
        self.save()

    def get_images(self):
        return json.loads(self.images)

    # def to_dict(self):
    #     event = {
    #         "name": self.name,
    #         "price": self.price,
    #         "images": self.get_images(),
    #         "description": self.description,
    #         "days": self.days,
    #         "event_provider": self.event_provider,
    #         "created_at": self.created_at
    #     }
    #     return event