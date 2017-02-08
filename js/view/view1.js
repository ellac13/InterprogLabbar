//View1 Object constructor
var View1 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.startButton = container.find("#startPlanningButton");

	var startButtonClick = function(event) {
		document.getElementById('view1').style.display= 'none';
		document.getElementById('view234').style.display= '';
	}
	this.startButton.click(startButtonClick);
	
}
 
