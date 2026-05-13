

var botonCalcular = document.getElementById("btn-calcular");


botonCalcular.addEventListener("click", function () {


  var adultos = parseInt(document.getElementById("adultos").value);
  var ninos = parseInt(document.getElementById("ninos").value);
  var jubilados = parseInt(document.getElementById("jubilados").value);


  if (isNaN(adultos) || isNaN(ninos) || isNaN(jubilados)) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  //precios
  var precioAdultos = adultos * 15;
  var precioNinos = ninos * 8;
  var precioJubilados = jubilados * 10;


  var subtotal = precioAdultos + precioNinos + precioJubilados;


  if (subtotal === 0) {
    alert("Añade al menos una entrada.");
    return;
  }


  var totalConIva = subtotal * 1.10;


  var ivaEuros = (totalConIva - subtotal).toFixed(2);


  var cajaResultado = document.getElementById("resultado");


  cajaResultado.innerHTML =
    "<h3>Resumen de tu pedido:</h3>" +
    "<p>Adultos: " + adultos + " x 15€ = " + precioAdultos + "€</p>" +
    "<p>Niños: " + ninos + " x 8€ = " + precioNinos + "€</p>" +
    "<p>Jubilados: " + jubilados + " x 10€ = " + precioJubilados + "€</p>" +
    "<hr>" +
    "<p>Subtotal: " + subtotal + "€</p>" +
    "<p>IVA (10%): " + ivaEuros + "€</p>" +
    "<p><strong>TOTAL: " + totalConIva.toFixed(2) + "€</strong></p>";


  cajaResultado.style.display = "block";
});


// contacto


var formulario = document.getElementById("formulario-contacto");


formulario.addEventListener("submit", function (evento) {


  evento.preventDefault();


  var nombre = document.getElementById("nombre").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();


  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, rellena todos los campos.");
    return;
  }


  document.getElementById("mensaje-resultado").textContent =
    "✅ ¡Gracias, " + nombre + "! Te responderemos pronto.";


  formulario.reset();
});
