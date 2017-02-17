define([
  'jquery',
  'underscore',
  'backbone',
  'views/providers/ProvidersView',
  'views/provider_events/ProviderEventsView',
  'views/providers/ProviderAddView',
  'views/events/EventAddView'
], function($, _, Backbone, ProvidersView, ProviderEventsView, ProviderAddView, EventAddView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "home",
      "provider_events/:slug": "provider_events",
      "new/provider": "add_edit_provider",
      "new/event": "add_edit_event"
    }
  });
  
  var initialize = function(){
    console.log("3- Router initialize function. (router.js)");
    var app_router = new AppRouter;
    var provider_slug = null;

    app_router.on('route:home', function() {
      console.log("4- I am on Home Page. (router.js)");
      var providersView = new ProvidersView();
      providersView.render();
    });
    app_router.on('route:provider_events', function(slug) {
      provider_slug = slug;
      var providerEventsView = new ProviderEventsView();
      providerEventsView.render({slug: slug});
    });
    app_router.on('route:add_edit_provider', function() {
      var providerAddView = new ProviderAddView();
      providerAddView.render();
    });
    app_router.on('route:add_edit_event', function() {
      console.log("provider slug");
      console.log(provider_slug);
      console.log("add new event");
      var eventAddView = new EventAddView({provider_slug: provider_slug});
      eventAddView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
