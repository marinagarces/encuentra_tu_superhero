function validaciones(){
  //Validar número ingresado
  if ($("#encuentra_tu_superhero").val() == ""){
      alert("Ingresar valor valido");
      //Vuelve a colocar el cursor en el textbox
      $("#encuentra_tu_superhero").focus();
      return false;
  }
  return true;
}


//Funcion inicial para jQuery
$(document).ready(function(){
  //Accion a reaizar por el boton al hacer click
  $("#botonBuscar").click(function(){
    //Validar el numero del Heroe ingresado
    if (validaciones()) {
      $('#main-section').hide();
      numeroHeroe = $("#encuentra_tu_superhero").val(); //Almacena en una variable el numero ingresado por el usuario
      $.ajax(
        {
        type:"GET",
        url:`https://www.superheroapi.com/api.php/4844752785553016/${numeroHeroe}`,
        dataType:"json",
        success: function(data){
          console.log(data);
          informacionHeroe(data)
          graficaHeroe(data)
          //si todo sale bien, se agrega la funcionalidad aquí
        }
      });
    };
    botonNuevaBusqueda=`<button type="button" id=btnInicio>Buscar otro Heroe</button>`;
    document.getElementById(datos-heroe).innerHTML=botonNuevaBusqueda
  });
});

function informacionHeroe(data){
  alert(`${data.powerstats.intelligence}`);
  content_hero = `<h4 class="container__titulo">SuperHero Encontrado<h4>
                  <div class="row">
                  <div class="col-md-4">`;
  content_hero += `<img src="${data.image.url}" class="img-fluid rounded-start">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"> Nombre: ${data.name}</h5>
                      <p class="card-body__descripcion">Conexiones: ${Object.values(data.connections)[0]}</p>
                      <p class="card-body__descripcion">Publicado por: ${data.biography.publisher}</p>
                      <p class="card-body__descripcion">Ocupación: ${data.work.occupation}</p>
                      <p class="card-body__descripcion">Primera aparición: ${Object.values(data.biography)[4]}</p>
                      <p class="card-body__descripcion">Altura: ${Object.values(data.appearance.height)[1]}</p>
                      <p class="card-body__descripcion">Peso: ${Object.values(data.appearance.weight)[1]}</p>
                      <p class="card-body__descripcion">Alianzas: ${Object.values(data.biography.aliases)}</p>
                      <button onclick="recargar()" type="button" class="btn btn-dark">Volver a buscar</button>
                    </div>
                  </div>
                </div>`
  document.getElementById('datos-heroe').innerHTML = content_hero;
};

//Funcion para recargar la pagina
function recargar(){
    location.reload(true);
};


function graficaHeroe(data){

  var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Gaming Consoles Sold in 2012"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: [
				{ y: 4181563, indexLabel: "PlayStation 3" },
				{ y: 2175498, indexLabel: "Wii" },
				{ y: 3125844, indexLabel: "Xbox 360" },
				{ y: 1176121, indexLabel: "Nintendo DS"},
				{ y: 1727161, indexLabel: "PSP" },
				{ y: 4303364, indexLabel: "Nintendo 3DS"},
				{ y: 1717786, indexLabel: "PS Vita"}
			]
		}
		]
	});
	chart.render();
};
