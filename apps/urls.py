__author__ = 'rabia'
from django.conf.urls import patterns, url
from apps import views

urlpatterns = patterns('',
                       url(r'^$', views.HomeView.as_view()),
                       )
