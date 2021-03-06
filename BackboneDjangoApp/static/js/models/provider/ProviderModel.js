define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var ProviderModel = Backbone.Model.extend({
      name: "ProviderModel",
      urlRoot: 'http://127.0.0.1:8000/api/providers',
      defaults: {
        'name': '',
        'location': '',
        'contact_no': '',
        'description': ''
      }

  });
  return ProviderModel;
});
