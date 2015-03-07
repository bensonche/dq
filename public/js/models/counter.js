(function(dq) {
	dq.CounterSet = Backbone.Collection.extend({
		model: dq.Counter
	});

	dq.Counter = Backbone.Model.extend({
		defaults: {
			count: 0
		},

		setCount: function(count) {
			this.set("count", count);
		},

		increment: function() {
			this.setCount(this.get("count") + 1);
		},

		decrement: function() {
			var count = this.get("count");

			if(count > 0) {
				this.setCount(count - 1);
				return true;
			}
			return false;
		}
	});
})(dq);
