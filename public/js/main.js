var dq = dq || {};

$(function() {
	dq.mainView = new dq.MainView();
	$("#mainView").append(dq.mainView.el);
});
