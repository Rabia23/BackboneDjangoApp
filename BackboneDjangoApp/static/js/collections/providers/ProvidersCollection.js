define([
  'jquery',
  'underscore',
  'backbone',
  'models/provider/ProviderModel'
], function($, _, Backbone, ProviderModel){
  var ProvidersCollection = Backbone.Collection.extend({
    model: ProviderModel,
    url: 'http://127.0.0.1:8000/api/providers'
  });
 
  return ProvidersCollection;
});
