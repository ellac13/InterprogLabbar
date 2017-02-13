//view56Controller Object constructor
var View56Controller = function (view, model, stateController) {
	
	var backButtonClick = function(event) {
		stateController.showView("view3");
	}
	view.backButton.click(backButtonClick);
}