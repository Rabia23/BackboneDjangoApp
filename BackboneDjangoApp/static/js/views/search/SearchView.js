define([
  'jquery',
  'underscore',
  'backbone',
  'text!/static/templates/search/searchTemplate.html'
], function($, _, Backbone, searchTemplate){

  var SearchView = Backbone.View.extend({
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
      console.log("search function (SearchView.js)");
      var option = $("#searchDropDown").find("option:selected").val();
      var searchValue = $('#searchValue').val();
      console.log(option);
      console.log(searchValue);

      if(searchValue) {
        var pattern = new RegExp(searchValue,"i");
        console.log(pattern);

        if (option == "Name")
          filtered_collection = this.searchByName(this.collection, pattern);
        else if (option == "Price")
          filtered_collection = this.searchByPrice(this.collection, pattern);
        else if (option == "Days")
          filtered_collection = this.searchByDays(this.collection, pattern);
      }
      else
        filtered_collection = this.collection;

      this.view.renderList(filtered_collection);
    },
    render: function(){
      console.log("9- Search render function. (SearchView.js)");
      this.$el.html(this.template);
    },
    initialize : function () {
      console.log("8- Search initialize function. (SearchView.js)");
	  this.template = searchTemplate;
      this.collection = this.options.collection;
      this.view = this.options.view;
    }
  });
  return SearchView;
});
