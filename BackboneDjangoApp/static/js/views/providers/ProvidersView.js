define([
  'jquery',
  'underscore',
  'backbone',
  'collections/providers/ProvidersCollection',
  'views/providers/ProvidersListView',
  'views/search/SearchView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/static/templates/providers/providersTemplate.html'
], function($, _, Backbone, ProvidersCollection, ProvidersListView, SearchView, providersTemplate){

  var ProvidersView = Backbone.View.extend({
    el: ".page",
    renderList : function(providers){
      console.log("10- Render Providers List. (ProvidersView.js)");
      var provider_list_view = new ProvidersListView({
        collection: providers
      });
      provider_list_view.render();
    },
    fetch_data: function(e){
      console.log("7- Fetching data from server. (ProvidersView.js)");
      var that = this;
      this.providers_collection.fetch({
        success: function (providers) {
          that.renderList(providers);
        }
      });
    },
    render: function(){
      console.log("6- Providers render function. (ProvidersView.js)");
      $('#searchSection').show();
      this.$el.html(this.template);
      this.fetch_data();
      // add search view
      var searchView = new SearchView({collection: this.providers_collection, view: new ProvidersView()});
      searchView.render();
    },
    initialize : function(){
      console.log("5- Providers initialize function. (ProvidersView.js)");
      this.providers_collection = new ProvidersCollection();
      this.template = providersTemplate;
    }
  });
  return ProvidersView;
});
