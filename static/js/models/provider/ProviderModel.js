define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var ProviderModel = Backbone.Model.extend({
      name: "ProviderModel"
  });

  return ProviderModel;
});
