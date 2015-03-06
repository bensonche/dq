(function(dq) {
	dq.CounterSet = Backbone.Collection.extend({
		model: dq.Counter
	});

	dq.Counter = Backbone.Model.extend({
		defaults: {
			count: 0
		}
	});
})(dq);
