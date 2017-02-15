 var searchView = Backbone.View.extend({
  el: '#searchSection',
  events: {
    "keyup #searchValue": "search",
    "change #searchDropDown":"search"
  },
  searchByName: function(collection, searchPattern) {
    return _(collection.filter(function(data) {
      return searchPattern.test(data.get("name"));
    }));
  },
  searchByPrice: function(collection, searchPattern) {
    return _(collection.filter(function(data) {
      return searchPattern.test(data.get("price"));
    }));
  },
  searchByDays: function(collection, searchPattern) {
    return _(collection.filter(function(data) {
      return searchPattern.test(data.get("days"));
    }));
  },
  search: function(event) {
    var option = $("#searchDropDown").find("option:selected").val();
    var searchValue = $('#searchValue').val();
    var collection = this.options.collection;
    var view = this.options.view;

    if(searchValue) {
      var pattern = new RegExp(searchValue,"i");
      console.log(pattern);

      if (option == "Name") 
        filtered_collection = this.searchByName(collection, pattern);
      else if (option == "Price") 
        filtered_collection = this.searchByPrice(collection, pattern);
      else if (option == "Days") 
        filtered_collection = this.searchByDays(collection, pattern);
      
      console.log("original collection");
      console.log(collection);
      console.log("filtered collection");
      console.log(filtered_collection);
    }
    else 
      filtered_collection = collection;
    
    view.renderList(filtered_collection);
  }

});