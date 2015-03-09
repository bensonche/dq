(function(dq) {
	dq.MainView = dq.View.extend({
		events: {
			"click #btnClear": "clear"
		},

		initialize: function() {
			var self = this;
			function addAttribute(name, showCounter) {
				if(typeof(showCounter) == "undefined")
					showCounter = false;

				self.collection.add(new dq.Attribute({name: name, showCounters: showCounter}));
			}

			this.collection = new dq.AttributeSet();

			addAttribute("Cloak", true);
			addAttribute("Head", true);
			addAttribute("Gloves", true);

			addAttribute("Main Hand", true);
			addAttribute("Chest", true);
			addAttribute("Left Hand", true);

			addAttribute("Talisman", true);
			addAttribute("Feet", true);
			addAttribute("Money Pouch", true);

			addAttribute("Necklace", true);
			addAttribute("Ring 1", true);
			addAttribute("Ring 2", true);

			addAttribute("Backpack 1", false);
			addAttribute("Backpack 2", false);
			addAttribute("Backpack 3", false);

			addAttribute("Backpack 4", false);
			addAttribute("Backpack 5", false);
			addAttribute("Notes", false);

			this.render();
		},

		render: function() {
			this.$el.html($("#mainTemplate").html());

			_(this.collection.models).each(function(value) {
				var view = this.addView(new dq.AttributeView({model: value}));
				view.$el.addClass("attribute");

				this.$el.append(view.el);
			}, this);
		},

		clear: function() {
			this.removeAll();

			dq.initialize();
		}
	});
})(dq);
