(function(dq) {
	dq.CharacterStatusView = Backbone.View.extend({
		el: "#characterStatus",

		initialize: function() {
			_.bindAll(this, "render");

			this.render();
		},

		render: function() {
			var attr = this.model.attributes;

			var keys = Object.keys(attr);

			var self = this;

			var template = _.template($("#statusTemplate").html());

			$.each(keys, function(index, key) {
				var value = attr[key];

				self.$el.append(template({name: key, value: value}));
			});
		}
	});
})(dq);
