//stateController Object constructor
var StateController = function () {

	var hideAllViews = function(){
		document.getElementById('view1').style.display= 'none';
		document.getElementById('view2').style.display= 'none';
		document.getElementById('view3').style.display= 'none';
		document.getElementById('view4').style.display= 'none';
		document.getElementById('view5').style.display= 'none';
		document.getElementById('view6').style.display= 'none';
		document.getElementById('view234').style.display= 'none';
		document.getElementById('view56').style.display= 'none';
	}

	this.showView = function(viewToShow){
		hideAllViews();
		if(viewToShow === "view1"){
			document.getElementById('view1').style.display= '';
		} else if (viewToShow === "view3" || viewToShow === "view4"){
			document.getElementById('view234').style.display= '';
			document.getElementById('view2').style.display= '';
			if(viewToShow === "view3"){
				document.getElementById('view3').style.display= '';
			} else if (viewToShow === "view4"){
				document.getElementById('view4').style.display= '';
			}
		} else if (viewToShow === "view5" || viewToShow === "view6"){
			document.getElementById('view56').style.display= '';
			if(viewToShow === "view5"){
				document.getElementById('view5').style.display= '';
			} else if (viewToShow === "view6"){
				document.getElementById('view6').style.display= '';
			}
		}
	}
}