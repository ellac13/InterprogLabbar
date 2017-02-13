//view1Controller Object constructor
var View1Controller = function (view, model, stateController) {
	
	var startButtonClick = function(event) {
		stateController.showView("view3");
	}
	view.startButton.click(startButtonClick);
}