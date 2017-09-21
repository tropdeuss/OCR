var Reservation = {
	context : document.getElementById('canvas').getContext("2d"),
	clickX : new Array(),
	clickY : new Array(),
	clickDrag : new Array(),
	paint : 0,
	init : function(){
		var _this = this;
		$(document).ready(function() {
			var canvas = Object.create(Canvas);
			canvas.init();
		});
		console.log(this.isResaActiv() + '  resaactiv');

		if(this.isResaActiv()){

			
			var date1 = localStorage.getItem("heure");
			var stationRes = localStorage.getItem("station");
			var adresseRes = localStorage.getItem("adresse");			
			var dateActu = new Date();
			var diff = this.dateDiff(date1,dateActu.getTime());

			$("#stationRes").text(stationRes);
			$("#adresseRes").text(adresseRes);
			$("#tempsRes").text(diff.min);
			
			console.log(diff);

			if (diff.min>=2){
				localStorage.clear();
				console.log("fin reservation");
			}else{

				$(".signature").hide();
				$("#resaBlock").hide();
			}

		}



		$( ".reserver" ).click(function() {
			$("#signature").css('display','flex');
			$("#resaBlock").css('display','none');
		});
		
		$( ".signature" ).click(function() {
			var date = new Date();
			var station = $("#nomStation").html();
			var adresse = $("#adresse").html();
			_this.storage($("#nomStation").html(),adresse,date);
		});
	},

	isResaActiv : function(){
		if(localStorage.getItem("station")){
			return true;
		}
		return false;	
	},



	storage : function(nom,adresse,heure){
		localStorage.setItem("station",nom);
		localStorage.setItem("adresse",adresse);
  		localStorage.setItem("heure",heure.getTime());
	},

	dateDiff : function(date1,date2){
	    var diff = {}                           // Initialisation du retour
	    var tmp = date2 - date1;
	 	
	    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
	    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
	 
	    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
	    diff.min = tmp % 60;                    // Extraction du nombre de minutes
	 
	    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
	    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
	     
	    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
	    diff.day = tmp;
	     
	    return diff;
	},
}