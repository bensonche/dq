var dq = dq || {};

(function(dq) {
	dq.initialize = function() {
		dq.mainView = new dq.MainView();
		$("#mainView").append(dq.mainView.el);
	}
})(dq);

$(function() {
	dq.initialize();
});
