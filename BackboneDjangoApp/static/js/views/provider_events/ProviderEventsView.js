define([
  'jquery',
  'underscore',
  'backbone',
  'collections/provider_events/ProviderEventsCollection',
  'views/provider_events/ProviderEventsListView',
  'views/search/SearchView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/static/templates/provider_events/providerEventsTemplate.html'
], function($, _, Backbone, ProviderEventsCollection, ProviderEventsListView, SearchView, providerEventsTemplate){

  var ProviderEventsView = Backbone.View.extend({
    el: ".page",
    renderList : function(events){
      var provide_events_list_view = new ProviderEventsListView({
        collection: events
      });
      provide_events_list_view.render();
    },
    fetch_data: function(){
      var that = this;
      this.provider_events_collection.fetch({
        success: function (events) {
          that.renderList(events);
        }
      })
    },
    render: function(options){
      this.$el.html(this.template);
      this.provider_events_collection = new ProviderEventsCollection(null, {slug: options.slug});
      this.fetch_data();
      // activate search
      var searchView = new SearchView({collection: this.provider_events_collection, view: new ProviderEventsView()});
      searchView.render();
    },
    initialize : function(){
      this.template = providerEventsTemplate;
    }
  });
  return ProviderEventsView;
});
