(function(dq) {
	dq.MainSheetView = Backbone.View.extend({
		el: "#mainSheet",

		initialize: function() {
			_.bindAll(this, "render");

			this.render();
		},

		render: function() {
			var cells = this.$el.find(".cell");
		}
	});
})(dq);

$(function() {
	var mainSheetView = new dq.MainSheetView();
});
