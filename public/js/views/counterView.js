(function(dq){
	dq.CounterView = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "render");

			this.render();
		},

		events: {
			"click .increment": "increment",
			"click .decrement": "decrement"
		},

		render: function() {
			var template = $("#counterTemplate").html();
			var compiled = _.template(template);

			this.$el.html(compiled({
				count: this.model.get("count"),
				type: this.model.get("type")
			}));

			return this;
		},

		increment: function(e) {
			e.preventDefault();
			this.model.increment();
			this.render();
		},

		decrement: function(e) {
			e.preventDefault();

			if(this.model.decrement())
				this.render();
		}
	});

	dq.CounterSetView = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "render");

			this.render();
		},

		render: function() {
			_.each(this.collection.models, function(value) {
				var counterView = new dq.CounterView({
					model: value,
				});

				this.$el.append(counterView.el);

			}, this);

			return this;
		}
	});
})(dq);