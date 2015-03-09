(function(dq) {
	dq.AttributeView = dq.View.extend({
		events: {
			"keyup .description": "descriptionChanged"
		},

		initialize: function() {
			this.render();
		},

		render: function() {
			var template = _.template($("#attributeTemplate").html());

			this.$el.html(template({
				name: this.model.get("name"),
				description: this.model.get("description")
			}));

			if(this.model.get("showCounters")) {
				var view = this.addView(new dq.CounterSetView({collection: this.model.get("counterSet")}));
				this.$el.append(view.el);
			}
		},

		descriptionChanged: function(e) {
			this.model.set("description", $(e.target).val());
			this.updateTextboxSize(e);
		},

		updateTextboxSize: function(e) {
			var textarea = $(e.target);

			var hiddenDiv = $("<div class='Arial11' style='display: none;' />");	

			$("body").append(hiddenDiv);

			hiddenDiv.css("width", textarea.width());

			var content = textarea.val();
			content = content.replace(/\n/g, '<br>');

			hiddenDiv.html(content + "<br /><br />");

			var minHeight = 70;

			if (hiddenDiv.height() < minHeight)
				textarea.height(minHeight);
			else
				textarea.height(hiddenDiv.height());

			hiddenDiv.remove();
		}
	});
})(dq);
