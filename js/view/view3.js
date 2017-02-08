//View3 Object constructor
var View3 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	//this.confirmButton = container.find("#confirmationButton");
	//this.selectDishGridRow = container.find("#selectDishGridRow");

	//document.getElementById('numberOfGuests').innerHTML = "whatever liksom";

	this.dishes = model.getAllDishes('main dish');

	this.generateDishesHTML = function(){
		var html = "";
		for (var i = 0; i < this.dishes.length; i++) {
			html = html + generateThumbnailHTML(this.dishes[i]['name'],this.dishes[i]['image'],this.dishes[i]['description']);
		};
		return html;
	}


	var generateThumbnailHTML = function(name, image, description){
		return '<div class="col-sm-12 col-md-3"><div class="thumbnail"><img src="images/' + image + '"><div class="caption"><h3>' + name + '</h3><p>' + description + '</p><p><a href="#" class="btn btn-primary" role="button">View</a> <a href="#" class="btn btn-default" role="button">Select</a></p></div></div></div>'; 
		//TODO: Lös knapparna
	}
	
	//Update the dish grid
	container.find("#selectDishGridRow").html(this.generateDishesHTML());
}
 
