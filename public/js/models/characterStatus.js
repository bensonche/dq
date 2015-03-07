(function(dq) {
	dq.CharacterStatus = Backbone.Model.extend({
		defaults: {
			Speed: 0,
			Brawn: 0,
			Magic: 0,
			Armor: 0,
			Health: 30
		},

		addCount: function(type, value) {
			if(this.keys().indexOf(type) < 0)
				return;

			this.set(type, this.get(type) + value);
		}
	});
})(dq);
