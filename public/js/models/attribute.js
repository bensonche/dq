(function(dq) {
	dq.AttributeSet = Backbone.Collection.extend({
		model: dq.Attribute
	});

	dq.Attribute = Backbone.Model.extend({
		defaults: {
			description: ""
		},

		initialize: function() {
			function addCounter(type) {
				counterSet.add(new dq.Counter({type: type}));
			}

			this.set("counterSet", new dq.CounterSet());
			var counterSet = this.get("counterSet");

			addCounter("Speed");
			addCounter("Brawn");
			addCounter("Magic");
			addCounter("Armor");
		}
	});
})(dq);
