__author__ = 'rabia'
from django.contrib import admin
from apps.provider.models import EventProvider


class EventProviderAdmin(admin.ModelAdmin):
    list_display = ('name',)

    prepopulated_fields = {'slug': ('name', )}

admin.site.register(EventProvider, EventProviderAdmin)
