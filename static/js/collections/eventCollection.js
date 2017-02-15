var EventCollection = Backbone.Collection.extend({
  model: EventModel,
  url: 'http://127.0.0.1:8000/api/event_provider'
});