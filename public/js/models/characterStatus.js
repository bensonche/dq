(function(dq) {
	dq.CharacterStatus = Backbone.Model.extend({
		defaults: {
			Speed: 0,
			Brawn: 0,
			Magic: 0,
			Armor: 0,
			Health: 0
		}
	});
})(dq);
