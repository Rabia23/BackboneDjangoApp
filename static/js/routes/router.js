var Router = Backbone.Router.extend({
  routes: {
    "": "home", 
    "event_provider/:slug": "event_provider",
    "new_provider": "add_edit_provider",
    "new_event": "add_edit_event",
  }
});