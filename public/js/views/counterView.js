(function(dq){
	dq.CounterView = dq.View.extend({
		initialize: function() {
			this.listenTo(this.model, "change", this.render);

			this.render();
		},

		events: {
			"click .increment": "increment",
			"click .decrement": "decrement"
		},

		render: function() {
			var template = _.template($("#counterTemplate").html());

			this.$el.html(template({
				count: this.model.get("count"),
				type: this.model.get("type")
			}));

			return this;
		},

		increment: function(e) {
			e.preventDefault();
			this.model.addCount(1);
		},

		decrement: function(e) {
			e.preventDefault();
			this.model.addCount(-1);
		}
	});
})(dq);
