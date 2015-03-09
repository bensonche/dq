(function(dq) {
	dq.AttributeView = dq.View.extend({
		events: {
			"keyup .description": "descriptionChanged"
		},

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
				var view = this.addView(new dq.CounterSetView({collection: this.model.get("counterSet")}));
				this.$el.append(view.el);
			}
		},

		descriptionChanged: function(e) {
			this.model.set("description", $(e.target).val());
		}
	});
})(dq);
