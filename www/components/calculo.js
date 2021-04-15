// This is a JavaScript file
var textodisplay = "";



var valor1 = 0;


var operador = "";

function zerardisplay(){
 textodisplay = "";
  $(".display").val("");
}
$(document).on("click","#ce",function(){
 zerardisplay();
valor1 = 0;
})

$(document).on("click",".botao",function(){
  textodisplay += $(this).val();
  $(".display").val(textodisplay);
})

$(document).on("click", ".ope", function(){
 operador = $(this).html();
 valor1 =  textodisplay;
 zerardisplay();
})

$(document).on("click","#igual",function(){
  var valor2 = textodisplay;
zerardisplay();

 if (operador == "+"){
   textodisplay = parseFloat(valor1) + parseFloat(valor2);
 }
  if (operador == "-"){
   textodisplay = parseFloat(valor1) - parseFloat(valor2);
 }
  if (operador == "*"){
   textodisplay = parseFloat(valor1) * parseFloat(valor2);
 }
 if (operador == "/"){
   textodisplay = parseFloat(valor1) / parseFloat(valor2);
 }



  $(".display").val(textodisplay);
})


