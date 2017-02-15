 var addEditView = Backbone.View.extend({
  el: '.page',
  events: {
    "submit .add-edit-form": "saveData",
  },
  saveData: function(ev) {
    ev.preventDefault();
    console.log("save data");
    var data = $('.add-edit-form').serializeJSON();
    console.log(data);
    // var event_provider_model = new EventProviderModel();
    this.options.model.save(data, {
      success: function (response) {
        console.log("response");
        console.log(response);
        router.navigate('', {trigger:true});
      }
    });
    return false;
  },
  render: function () {
    console.log("add edit render function");
    console.log(this);
    console.log(this.options.model.name);
    if(this.options.model.name == "eventProviderModel")
      $(this.el).html(this.template({provider: null, providerView: true}));
    else
      $(this.el).html(this.template({event: null, providerView: false}));
  },
    
  initialize : function () {
    console.log("add edit initialize function");
    this.template = _.template($("#add-edit-template").html());
  }

});