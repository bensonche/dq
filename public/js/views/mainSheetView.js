(function(dq) {
	dq.MainSheetView = Backbone.View.extend({
		el: "#mainSheet",

		initialize: function() {
			_.bindAll(this, "render");

			this.render();
		},

		render: function() {
			var cells = this.$el.find(".cell");

			var template = $("#mainCellTemplate").html();

			cells.each(function(index, value) {
				var compiled = _.template(template);

				var $value = $(value);

				var name = $value.attr("data-name");

				var cell = compiled({
					name: name
				});

				$value.append(cell);

				var csView = new dq.CounterSetView({el: $value.find(".attributes")});
			});
		}
	});

})(dq);

$(function() {
	var mainSheetView = new dq.MainSheetView();
});
