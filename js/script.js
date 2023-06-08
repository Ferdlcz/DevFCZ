//Funcionalidad a barra vertical

const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', function() {
  sidebar.classList.toggle('show');
    
});


//Animacion de titulos index page.

document.addEventListener("DOMContentLoaded", function() {
  var letras = document.querySelectorAll(".letras");
  for (var i = 0; i < letras.length; i++) {
    letras[i].style.animationDelay = i * 0.1 + "s";
  }
});

//OCULTAR Y MOSTRAR FOOTER DE ACORDE A LA POSICION DE LA PAGINA

var footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
  // altura de la ventana
  var windowHeight = window.innerHeight;
  // altura del contenido de la página
  var bodyHeight = document.body.offsetHeight;
  // posición actual de la página
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
  // si la posición actual es mayor o igual a la altura de la ventana más la altura del contenido
  // de la página, mostramos el footer
  if (scrollPosition >= (bodyHeight - windowHeight)) {
    footer.style.bottom = "0";
  } else {
    // de lo contrario, ocultamos el footer
    footer.style.bottom = "-100px";
  }
});