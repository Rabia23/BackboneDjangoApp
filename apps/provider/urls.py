__author__ = 'rabia'
from django.conf.urls import patterns, url
from apps.provider import views

urlpatterns = patterns('',
                       url(r'^providers$', views.EventProviderView.as_view()),
                       url(r'^providers/(?P<slug>[-\w]+)$', views.EventProviderView.as_view()),
                       )
