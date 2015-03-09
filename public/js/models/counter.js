(function(dq) {
	dq.CounterSet = Backbone.Collection.extend({
		model: dq.Counter,

		initialize: function() {
			this.add(new dq.Counter({type: "Speed"}));
			this.add(new dq.Counter({type: "Brawn"}));
			this.add(new dq.Counter({type: "Magic"}));
			this.add(new dq.Counter({type: "Armor"}));
		}
	});

	dq.Counter = Backbone.Model.extend({
		defaults: {
			count: 0
		},

		initialize: function() {
			this.listenTo(this, "change:count", function(e) {
				this.trigger("countChanged", {
					type: e.get("type"),
					countChange: e.get("count") - e.previous("count")
				});
			});
		},

		addCount: function(value) {
			this.set("count", this.get("count") + value);
		}
	});
})(dq);
