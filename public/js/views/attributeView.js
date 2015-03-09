(function(dq) {
	dq.AttributeView = Backbone.View.extend({
		initialize: function() {
			this.childViews = [];

			this.render();
		},

		render: function() {
			var template = _.template($("#attributeTemplate").html());

			this.$el.html(template({
				name: this.model.get("name"),
				description: this.model.get("description")
			}));

			if(this.model.get("showCounters")) {
				var view = new dq.CounterSetView({collection: this.model.get("counterSet")});
				this.$el.append(view.el);

				this.childViews.push(view);
			}
		}
	});
})(dq);
