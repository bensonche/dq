(function(dq) {
	dq.MainView = dq.View.extend({
		events: {
			"click #btnClear": "clear"
		},

		initialize: function() {
			this.setupCollection();

			this.render();
		},

		render: function() {
			this.$el.html($("#mainTemplate").html());

			_(this.collection.models).each(function(value) {
				var view = this.addView(new dq.AttributeView({model: value}));
				view.$el.addClass("attribute");

				this.$el.append(view.el);

				if(value.get("EOL"))
					this.$el.append("<br />");
			}, this);

			var view = this.addView(new dq.CharacterStatusView());
			this.$el.append(view.el);
			view.listenTo(this.collection, "countChanged", view.addCount);
		},

		clear: function() {
			this.removeAll();

			dq.initialize();
		},

		setupCollection: function() {
			var self = this;
			function addAttribute(name, showCounter, EOL) {
				if(typeof(showCounter) == "undefined")
					showCounter = false;
				if(typeof(EOL) == "undefined")
					EOL = false;

				self.collection.add(new dq.Attribute({name: name, showCounters: showCounter, EOL: EOL}));
			}

			this.collection = new dq.AttributeSet();

			addAttribute("Cloak", true);
			addAttribute("Head", true);
			addAttribute("Gloves", true, true);

			addAttribute("Main Hand", true);
			addAttribute("Chest", true);
			addAttribute("Left Hand", true, true);

			addAttribute("Talisman", true);
			addAttribute("Feet", true);
			addAttribute("Money Pouch", false, true);

			addAttribute("Necklace", true);
			addAttribute("Ring 1", true);
			addAttribute("Ring 2", true, true);

			addAttribute("Backpack 1", false);
			addAttribute("Backpack 2", false);
			addAttribute("Backpack 3", false);
			addAttribute("Backpack 4", false);
			addAttribute("Backpack 5", false, true);

			addAttribute("Notes", false);
		}
	});
})(dq);
