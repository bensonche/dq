(function(dq) {
	dq.MainSheetView = Backbone.View.extend({
		el: "#mainSheet",

		events: {
			"click #btnClear": "clear"
		},

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

			dq.AttributeList.fetch();
			this.render();
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

				$cell.find(".description").on("keydown change keyup", value.updateDescription);

				var includeCounter = $cell.attr("data-counter");

				if(includeCounter && includeCounter.toLowerCase() == "true") {
					new dq.CounterSetView({
						el: $cell.find(".attributes"),
						collection: value.get("counterSet")
					});
				}

			}, this);
		},

		clear: function() {
			if(confirm("Are you sure you want to clear the page?")) {
				$.each(Object.keys($.cookie()), function(i, key) {
					if(key.indexOf("dqData") >= 0) {
						$.removeCookie(key);
					}
				});
				location.reload();
			}
		}
	});

})(dq);

