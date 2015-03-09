(function(dq) {
	dq.AttributeView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},

		render: function() {
			var template = _.template($("#attributeTemplate").html());

			this.$el.html(template({
				name: this.model.get("name"),
				description: this.model.get("description")
			}));

			if(this.model.get("showCounters")) {
				this.$el.append(new dq.CounterSetView({collection: this.model.get("counterSet")}).el);
			}
		}
	});
})(dq);
