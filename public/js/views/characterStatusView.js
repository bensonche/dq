(function(dq) {
	dq.CharacterStatusView = dq.View.extend({
		el: "#characterStatus",

		initialize: function() {
			this.model.bind("change", this.render);

			this.render();
		},

		render: function() {
			var keys = this.model.keys();

			var self = this;

			this.$el.empty();

			var template = _.template($("#statusTemplate").html());

			$.each(keys, function(index, key) {
				var value = self.model.get(key);

				self.$el.append(template({name: key, value: value}));
			});
		}
	});
})(dq);
