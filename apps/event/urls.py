__author__ = 'rabia'
from django.conf.urls import patterns, url
from apps.event import views

urlpatterns = patterns('',
                       url(r'^events$', views.EventView.as_view()),
                       url(r'^events/(?P<slug>[-\w]+)$', views.EventView.as_view()),
                       url(r'^provider_events/(?P<provider_slug>[-\w]+)$', views.ProviderEventView.as_view()),
                       )
