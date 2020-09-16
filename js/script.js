// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function() {
  $(".quadrato").click(function() {
    var numeroQuadrato = $(this).attr("data-numero");
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          var numeroCpu = data.response;
          analisiValoreNumero(numeroCpu, numeroQuadrato);
        },
        error: function (richiesta, stato, errori) {
        console.log(errori);
        }
      }
    );
  });
});


// FUNCTION

function analisiValoreNumero(numero, numeroQuadrato) {
  if (numero > 5) {
    $("[data-numero=" + numeroQuadrato + "]").addClass("verde");
    $("[data-numero=" + numeroQuadrato + "]").children(".numeroCentrato").text(numero);

  }
  else if (numero <= 5) {
    $("[data-numero=" + numeroQuadrato + "]").addClass("giallo");
    $("[data-numero=" + numeroQuadrato + "]").children(".numeroCentrato").text(numero);
  }
}


//HANDLEBARS

var source = $("#entry-template1").html();
var template1 = Handlebars.compile(source);
var lineaSource = $("#entry-template2").html();
var template2 = Handlebars.compile(lineaSource);
// var attributo = 0;
for (var j = 0; j < 6; j++) {
  var visualRow2 = template2();
  $(".griglia").append(visualRow2);
  for (var i = 0; i < 6; i++) {
    var visualRow = template1();
    $(".linea").append(visualRow);
  }
}
