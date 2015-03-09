(function(dq) {
	dq.AttributeSet = Backbone.Collection.extend({
		model: dq.Attribute,

		saveAll: function() {
			this.sync("update", this);
		},

		sync: function(method, model, options) {
			switch(method) {
				case "create":
				case "update":
					var expire = new Date("12/31/2020");

					$.each(model.toJSON(), function(i, value) {
						$.cookie("dqData" + i, JSON.stringify(value), { expires: expire});
					});

					break;
				case "read":
					if(Object.keys($.cookie()).indexOf("dqData0") < 0)
						break;

					var data = [];
					$.each(Object.keys($.cookie()), function(i, key) {
						if(key.indexOf("dqData") === 0) {
							data.push(JSON.parse($.cookie(key)));
						}
					});

					var self = this;
					
					$.each(data, function(i, value) {
						var modelList = self.where({name: value.name});

						if(modelList.length > 0) {
							var model = modelList[0];

							model.load(value);
						}
					});

					break;
			}
		}
	});

	dq.Attribute = Backbone.Model.extend({
		defaults: {
			description: ""
		},

		initialize: function() {
			_.bindAll(this, "updateDescription");

			if(this.get("showCounters")) {
				var counterSet = new dq.CounterSet();
				this.set("counterSet", counterSet);

				this.listenTo(counterSet, "change", function(e) {
					this.trigger("countChanged", {
						type: e.get("type"),
						countChange: e.get("count") - e.previous("count")
					});
				});
			}
		},

		updateDescription: function(e) {
			this.set("description", $(e.target).val());
		},

		load: function(model) {
			this.set("description", model.description);

			var self = this;

			$.each(model.counterSet, function(i, value) {
				var counterList = self.get("counterSet").where({type: value.type});

				if(counterList.length > 0) {
					var counter = counterList[0];
					counter.set("count", value.count);
				}
			});
		}
	});
})(dq);
