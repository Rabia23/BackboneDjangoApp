define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var ProviderEventsCollection = Backbone.Collection.extend({
    url: function() {
      return 'http://localhost:8000/api/provider_events/' + this.slug;
    },
    initialize: function (models, options) {
      this.slug = options.slug;
    }
  });
  return ProviderEventsCollection;
});
