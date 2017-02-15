 var eventProviderListView = Backbone.View.extend({
  render: function () {
    $(this.el).html(this.template);
    return this;
  },
  
  renderList : function(providers){
    $("#providerList").html("");

    providers.each(function(provider){
      var list_view = new listView({
        model: provider,
        collection: this.event_providers_collection
      });
      $("#providerList").append(list_view.render().el);
    });
    return this;
  },

  initialize : function(options){
    this.event_providers_collection = options.event_providers_collection;
    this.template = _.template($("#provider-list-template").html());
  },

  fetch_data: function(e){
    var that = this; 
    this.event_providers_collection.fetch({
      success: function (providers) {
        that.renderList(providers);
      }
    })
  }
});