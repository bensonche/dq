var dq = dq || {};

$(function() {
	dq.characterStatus = new dq.CharacterStatus();

	new dq.CharacterStatusView({model: dq.characterStatus});

	var mainSheetView = new dq.MainSheetView();
});
