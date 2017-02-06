$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#view2"), model);
	var exampleViewController = new ExampleViewController(exampleView, model);

});