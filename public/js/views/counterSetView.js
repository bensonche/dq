(function(dq){
	dq.CounterSetView = dq.View.extend({
		initialize: function() {
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
