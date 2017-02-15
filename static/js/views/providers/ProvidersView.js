define([
  'jquery',
  'underscore',
  'backbone',
  //'views/sidebar/SidebarView',
  //'models/project/ProjectModel',
  'collections/providers/ProvidersCollection',
  //'views/projects/ProjectsListView',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/static/templates/providersTemplate.html'
], function($, _, Backbone, providersTemplate, ProvidersCollection){

  var ProvidersView = Backbone.View.extend({
    el: $(".page"),
    fetch_data: function(e){
      console.log("providers fetch data function");
      var that = this;
      var providers_collection = new ProvidersCollection();
      providers_collection.fetch({
        success: function (providers) {
          console.log(providers);
          //that.renderList(providers);
        }
      })
    },
    render: function(){
      console.log("providers view render function");
      var that = this;
      var providers_collection = new ProvidersCollection();
      providers_collection.fetch({
        success: function (providers) {
          console.log(providers);
          //that.renderList(providers);
          that.$el.html(providersTemplate);
        }
      });

      //this.fetch_data();
    }
  });

  return ProvidersView;
});
