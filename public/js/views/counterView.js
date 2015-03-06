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

		increment: function() {
			this.model.set({count: this.model.get("count") + 1});
			this.render();
		},

		decrement: function() {
			if(this.model.get("count") > 0) {
				this.model.set({count: this.model.get("count") - 1});
				this.render();
			}
		}
	});

	dq.CounterSetView = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "render");

			this.collection = new dq.CounterSet();

			this.collection.add(new dq.Counter({type: "Speed"}));
			this.collection.add(new dq.Counter({type: "Brawn"}));
			this.collection.add(new dq.Counter({type: "Magic"}));
			this.collection.add(new dq.Counter({type: "Armor"}));

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
