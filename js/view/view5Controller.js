//view5Controller Object constructor
var View5Controller = function (view, model, stateController) {
	var printButtonClick = function(event) {
		stateController.showView("view6");
	}
	view.printButton.click(printButtonClick);
}