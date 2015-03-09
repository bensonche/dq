(function(dq) {
	dq.View = function(options) {
		this.childViews = [];

		Backbone.View.call(this, options);
	}

	_.extend(dq.View.prototype, Backbone.View.prototype, {
		removeAll: function() {
			_.each(this.childViews, function(view) {
				view.removeAll();
			});

			this.remove();
			this.off();
		},

		addView: function(view) {
			this.childViews.push(view);
			return view;
		}
	});

	dq.View.extend = Backbone.View.extend;
})(dq);