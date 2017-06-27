var api = {
  url:'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var crearElementos = function(datosAlumna){
  var $alumna=$('<li class="alumna"/>').text( "  "+datosAlumna.name + " " + datosAlumna.pLastName + "  " + datosAlumna.mLastName)
  var $checkbox = $('<input type="checkbox" class="alumnaCheck"/>');
  $alumna.prepend($checkbox);
  var $label = $('<label/>').append($alumna)
  $("#listadoAlumnas").append($label);
};

$(document).ready(function(){
  $.getJSON(api.url,function(alumnas){
    alumnas.forEach(function(alumna){
        crearElementos(alumna);
    });
  });
});
