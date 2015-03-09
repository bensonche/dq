(function(dq){
	dq.CounterSetView = dq.View.extend({
		initialize: function() {
			this.render();
		},

		render: function() {
			_.each(this.collection.models, function(value) {
				var counterView = this.addView(new dq.CounterView({
					model: value,
				}));

				this.$el.append(counterView.el);
			}, this);

			return this;
		}
	});
})(dq);
