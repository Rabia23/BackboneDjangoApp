define([
  'jquery',
  'underscore',
  'backbone',
  'models/event/EventModel'
], function($, _, Backbone, EventModel){
  var EventsCollection = Backbone.Collection.extend({
    model: EventModel,
    url: 'http://127.0.0.1:8000/api/events'
  });
 
  return EventsCollection;
});
