//view4Controller Object constructor
var View4Controller = function (view, model, stateController) {
	var backButtonClick = function(event) {
		stateController.showView("view3");
	}
	view.backButton.click(backButtonClick);
}