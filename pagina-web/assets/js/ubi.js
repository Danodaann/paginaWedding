function abrirGoogleMaps() {
  // Obtener la dirección del contenedor
  var direccion = document.getElementById("direccion").innerText;

  // Reemplazar espacios con '+'
  direccion = direccion.replace(/ /g, "+");

  // Crear la URL de Google Maps
  var url = "https://www.google.com/maps/place/" + direccion;

  // Abrir en una nueva pestaña
  window.open(url, "_blank");
}
