define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var EventModel = Backbone.Model.extend({
      name: "EventModel"
  });

  return EventModel;
});
