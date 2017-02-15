__author__ = 'rabia'
from django.db import models


class EventProvider(models.Model):
    name = models.CharField(max_length=20, unique=True)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=40, blank=True)
    contact_no = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    slug = models.SlugField(max_length=20, unique=True)

    def __str__(self):
        return self.name
