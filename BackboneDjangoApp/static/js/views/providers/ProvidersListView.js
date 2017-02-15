define([
  'jquery',
  'underscore',
  'backbone',
  'text!/static/templates/providers/providersListTemplate.html'

], function($, _, Backbone, providersListTemplate){
  var ProvidersListView = Backbone.View.extend({
    el: "#providerList",
    render: function(){
      console.log("12- Providers List render function. (ProvidersListView.js)");
      // modify it
      if(this.collection.models == undefined)
        this.$el.html(this.template({providers: this.collection._wrapped}));
      else
        this.$el.html(this.template({providers: this.collection.models}));
    },
    initialize : function () {
      console.log("11- Providers List initialize function. (ProvidersListView.js)");
	  this.template = _.template(providersListTemplate);
    }
  });
  return ProvidersListView;
});
