function clear_data() {
  if($("#searchSection").hide())  $("#searchSection").show();
  $(".page").html("");
  $('#searchValue').val(""); 
  search_view.options = {}; 
}

// creating event provider collection
var event_providers_collection = new EventProviderCollection();
// creating event collection
var event_collection = new EventCollection();
// creating search view
var search_view = new searchView();
// creating view for add/edit event provider and event
var add_edit_view = new addEditView();

var router = new Router();

router.on('route:home', function() {
  clear_data(); 
  var event_provider_list_view = new eventProviderListView({
  	event_providers_collection: event_providers_collection
  });
  $(".page").append(event_provider_list_view.render().el);	
  event_provider_list_view.fetch_data();

  search_view.options = {
    collection: event_providers_collection,
    view: event_provider_list_view
  };
})

router.on('route:event_provider', function(slug) {
  clear_data();
  var event_list_view = new eventListView({
  	event_collection: event_collection
  });
  $(".page").append(event_list_view.render().el);	
  event_list_view.fetch_data({slug: slug});

  search_view.options = {
    collection: event_collection,
    view: event_list_view
  };

  add_edit_view.options = {
    slug: slug
  };
  console.log("event_provider route");
  console.log(add_edit_view);

})

router.on('route:add_edit_provider', function() {
  console.log("add_edit_provider");
  $(".page").html("");
  $("#searchSection").hide();
  add_edit_view.options = {
    model: new EventProviderModel()
  };
  console.log("add_edit_provider route");
  console.log(add_edit_view);
  add_edit_view.render();
})

router.on('route:add_edit_event', function() {
  console.log("add_edit_event");
  $(".page").html("");
  $("#searchSection").hide();
  add_edit_view.options = {
    model: new EventModel()
  };
  console.log("add_edit_event route");
  console.log(add_edit_view);
  add_edit_view.render();
})

Backbone.history.start();
