define([
  'jquery',
  'underscore',
  'backbone',
  'libs/jquery/jquery-serializejson',
  'models/provider/ProviderModel',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!/static/templates/providers/providerAddTemplate.html'
], function($, _, Backbone, SerializeJson, ProviderModel, providerAddTemplate){

  var ProviderAddView = Backbone.View.extend({
    el: ".page",
    events: {
      "submit .add-edit-form": "saveData"
    },
    saveData: function(ev) {
      ev.preventDefault();
      var data = $('.add-edit-form').serializeJSON();
      console.log(data);
      this.model.save(data, {
        success: function (response) {
          console.log("response");
          console.log(response);
          Backbone.history.navigate('', {trigger:true});
        }
      });
      return false;
    },
    render: function() {
      $('#searchSection').hide();
      this.$el.html(this.template({provider: null}));
    },
    initialize : function() {
      this.model = new ProviderModel();
      this.template = _.template(providerAddTemplate);
    }
  });

  return ProviderAddView;
});
