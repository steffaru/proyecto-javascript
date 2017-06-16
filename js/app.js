var bio = {
	nombreApellido:"Estefania Aranguren",
	fechaNac:"Abril - 1988",
	estCivil:"Soltera",
	habilities:["github","html5","Js","jquery","bootstrap","css","sass","photoshop","illustrator"],
	lugares:["lima","caracas","miranda","coro","pto ordaz","buenos aires","entre rios","bariloche","illustrator"],
	github:"https://github.com/steffaru",

	mostrar:function(){
		$("#myImage").attr("src","img/foto-cv-tiny.jpg");
		$("#data-head").append("<br>" + this.fechaNac + "<br>" + this.estCivil + "<br>" + this.habilities + "<br>" + this.github);
		console.log(bio);
	}

};
var educ = {
	titulo:"Lic. Lengua y Literatura",
	diplomas:"Diseño Multimedia, Tecnología Digital, Diseño Web",
	cursos:"Js, Bootstrap, HTML5 y CSS, entre otros",
	mostrar:function(){
		$("#data-education").append("<br>" + this.titulo + "<br>" + this.diplomas + "<br>" + this.cursos);
		console.log(educ);
	}
};
var exp = {
	ultEmpleo:"Moorea",
	antEmpleo:"Didactica Editores",
	penEmpleo:"Web & Logics",
	mostrar:function(){
		$("#data-experiencia").append("<br>" + this.ultEmpleo + "<br>" + this.antEmpleo + "<br>" + this.penEmpleo);
		console.log(exp);

	}
};
var proj = {
	proyectos:"https://github.com/steffaru?tab=repositories",
	mostrar:function(){
		$("#data-project").append( "<br>" + this.proyectos);
		console.log(proj);
	}
};

citys = [
	{position: {lat: 10.4683612, lng: -67.0304549},
	name:"Caracas"
	},
	{position: {lat: -23.6821604, lng: -46.8755003},
	name:"Sao Paulo"
	},
	{position: {lat: -34.6156541, lng: -58.573407},
	name:"Buenos Aires"
	},
	{position: {lat: -12.0264987, lng: -77.2679837},
	name:"Lima"
	},
	{position: {lat: -22.9140132, lng: -68.2161743},
	name:"San Pedro de Atacama"
	},
	{position: {lat: -34.9425087, lng: -54.9468936},
	name:"Punta del Este"
	},
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: citys[4].position
    	});
    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < citys.length; i++) {
    	var marker = new google.maps.Marker({
	      	position: citys[i].position,
	      	map: map
    		});

	    google.maps.event.addListener(marker, 'click', (function(marker, i) {
	    	return function() {
				infowindow.setContent(citys[i].name);
				infowindow.open(map, marker);
	        	}
	    	})(marker, i));
	}
}

bio.mostrar();
educ.mostrar();
exp.mostrar();
proj.mostrar();


// var key = "AIzaSyD-2Lqp-JI1iN52ZF_37ENdUvN3uyc3LI4";
