(function(dq) {
	dq.CounterSet = Backbone.Collection.extend({
		model: dq.Counter
	});

	dq.Counter = Backbone.Model.extend({
		defaults: {
			count: 0
		},

		setCount: function(value) {
			console.log("B");
			var current = this.get("count");
			console.log(value - current);
			this.addCount(value - current);
		},

		addCount: function(value) {
			this.set("count", this.get("count") + value);

			dq.characterStatus.addCount(this.get("type"), value);

			return true;
		}
	});
})(dq);
