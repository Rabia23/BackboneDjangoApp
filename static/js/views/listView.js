var listView = Backbone.View.extend({
 	render: function () {
		if(this.collection.model.prototype.name == "eventProviderModel")
			$(this.el).html(this.template({provider: this.model}));
		else
			$(this.el).html(this.template({event: this.model}));
		
		return this;
    },
    
    initialize : function () {
		this.template = _.template($("#list-item-tpl").html());
    }
});