 var eventListView = Backbone.View.extend({
  render: function () {
    $(this.el).html(this.template);
    return this;
  },

  renderList : function(events) {
    $("#eventList").html("");

    events.each(function(event) {
      console.log(event.get('images'));
      images = event.get('images');
      split_array = images.split(",");
      console.log(split_array);
      // _.each(event.get('images'), function(image){
      //   console.log(image);
      // });
      var list_view = new listView({
        model: event,
        collection: this.event_collection
      });
      $("#eventList").append(list_view.render().el);
    });
    return this;
  },

  initialize : function(options) {
    this.event_collection = options.event_collection;
    this.template = _.template($("#event-list-template").html());
  },

  fetch_data: function(options) {
    var that = this; 
    if(options.slug) {
      this.event_collection.fetch({
        data: {
          slug: options.slug
        },
        success: function (events) {
          that.renderList(events);
        }
      })
    }
  }
});