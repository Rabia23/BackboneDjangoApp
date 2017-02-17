define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var EventModel = Backbone.Model.extend({
      name: "EventModel",
      urlRoot: 'http://127.0.0.1:8000/api/events'
  });

  return EventModel;
});
