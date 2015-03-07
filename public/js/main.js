var dq = dq || {};

$(function() {
	var characterStatus = new dq.CharacterStatus();

	new dq.CharacterStatusView({model: characterStatus});

});
