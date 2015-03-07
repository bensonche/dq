(function(dq) {
	dq.MainSheetView = Backbone.View.extend({
		el: "#mainSheet",

		initialize: function() {
			_.bindAll(this, "render");

			this.collection = new dq.AttributeSet();
			dq.AttributeList = this.collection;

			dq.AttributeList.bind("change", dq.AttributeList.saveAll);

			this.$(".cell").each(function(index, value) {
				var attribute = new dq.Attribute({
					name: $(value).attr("data-name")
				});

				dq.AttributeList.add(attribute);
			});
		},

		render: function() {
			var template = _.template($("#mainCellTemplate").html());

			this.collection.each(function(value) {
				var name = value.get("name");

				var $cell = this.$(".cell[data-name='" + name + "']");
				$cell.append(template({
					name: name,
					description: value.get("description")
				}));

				$cell.find(".description").on("keydown", value.updateDescription);

				new dq.CounterSetView({
					el: $cell.find(".attributes"),
					collection: value.get("counterSet")
				});

			}, this);
		}
	});

})(dq);

