(function(dq) {
	dq.CharacterStatusView = dq.View.extend({
		initialize: function() {
			this.collection = new dq.CounterSet();

			this.listenTo(this.collection, "change", this.render);

			this.render();
		},

		render: function() {
			this.$el.empty();

			var template = _.template($("#statusTemplate").html());

			_(this.collection.models).each(function(value) {
				this.$el.append(template({
					name: value.get("type"),
					value: value.get("count")
				}));
			}, this);

			return;


			$.each(keys, function(index, key) {
				var value = self.model.get(key);

				self.$el.append(template({name: key, value: value}));
			});
		},

		addCount: function(e) {
			var counter = this.collection.findWhere({type: e.type});
			counter.addCount(e.countChange);
		}
	});
})(dq);
