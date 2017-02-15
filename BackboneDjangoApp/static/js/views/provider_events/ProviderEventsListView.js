define([
  'jquery',
  'underscore',
  'backbone',
  'text!/static/templates/provider_events/providerEventsListTemplate.html'

], function($, _, Backbone, providerEventsListTemplate){
  var ProviderEventsListView = Backbone.View.extend({
    el: "#providerEventList",
    render: function(){
      if(this.collection.models == undefined)
        this.$el.html(this.template({events: this.collection._wrapped}));
      else
        this.$el.html(this.template({events: this.collection.models}));
    },
    initialize : function () {
	  this.template = _.template(providerEventsListTemplate);
    }
  });
  return ProviderEventsListView;
});
