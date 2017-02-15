__author__ = 'rabia'
from django.contrib import admin
from apps.event.models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = ('name',)

    prepopulated_fields = {'slug': ('name', )}

admin.site.register(Event, EventAdmin)
