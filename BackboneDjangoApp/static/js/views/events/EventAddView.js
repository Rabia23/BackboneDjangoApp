define([
  'jquery',
  'underscore',
  'backbone',
  'libs/jquery/jquery-serializejson',
  'models/event/EventModel',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/static/templates/events/eventAddTemplate.html'
], function($, _, Backbone, SerializeJson, EventModel, eventAddTemplate){

  var EventAddView = Backbone.View.extend({
    el: ".page",
    events: {
      "submit .event-add-edit-form": "saveData"
    },
    saveData: function(ev) {
      ev.preventDefault();
      var data = $('.event-add-edit-form').serializeJSON();
      console.log(data);
      var that = this;
      this.model.save(data, {
        success: function (response) {
          console.log("response");
          console.log(response);
          Backbone.history.navigate("provider_events/"+ that.provider_slug, {trigger:true});
        }
      });
      return false;
    },
    render: function() {
      $('#searchSection').hide();
      this.$el.html(this.template({event: null, provider_slug: this.provider_slug}));
    },
    initialize : function(options) {
      this.model = new EventModel();
      this.template = _.template(eventAddTemplate);
      this.provider_slug = options.provider_slug;
    }
  });

  return EventAddView;
});
