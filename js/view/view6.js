//View5 Object constructor
var View6 = function (container, model) {

	this.menu = model.getFullMenu(); //TODO:Implementera currently vald dish

	this.generateViewHTML = function(){
		var html = "";
		for (var i = 0; i < this.menu.length; i++) {
			html = html + generateDishHTML(this.menu[i]['name'],this.menu[i]['image'],this.menu[i]['description']);
		};
		return html;
	}

	var generateDishHTML = function(name, image, description){
		return '<div class="row dishDescription"><div class="col-sm-12 col-md-6 col-lg-6"><img src="images/' + image + '" style="float:left"><h2>' + name + '</h2><p>' + description + '</p></div><div class="col-sm-12 col-md-6 col-lg-6"><h3>Preparation</h3><p>' + description + '</p></div></div>';
	}
	
	//Update the dish grid
	container.find("#printView").html(this.generateViewHTML());
}
 
