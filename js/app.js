$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var stateController = new StateController();
	var view1 = new View1($("#view1"), model);
	var view2 = new View2($("#view2"), model);
	var view2Controller = new View2Controller(view2, model, stateController);
	var view3 = new View3($("#view3"), model);
	var view3Controller = new View3Controller(view3, model, stateController);
	var view4 = new View4($("#view4"), model);
	var view4Controller = new View4Controller(view4, model, stateController);
	var view56header = new View56header($("#view56"), model);
	var view5 = new View5($("#view5"), model);
	var view6 = new View6($("#view6"), model);

	//var exampleView = new ExampleView($("#view2"), model);
	//var exampleViewController = new ExampleViewController(exampleView, model);

});