(function(dq){
	dq.CounterView = Backbone.View.extend({
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

	dq.CounterSetView = Backbone.View.extend({
		initialize: function() {
			this.childViews = [];

			this.render();
		},

		render: function() {
			_.each(this.collection.models, function(value) {
				var counterView = new dq.CounterView({
					model: value,
				});

				this.$el.append(counterView.el);

				this.childViews.push(counterView);
			}, this);

			return this;
		}
	});
})(dq);
