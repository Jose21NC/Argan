document.addEventListener("DOMContentLoaded", function() {
  console.log('DOMContentLoaded event fired.'); // Agregado para verificar
  const menuTrigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.main-nav .nav');

  // Agregar un evento de clic al botón del menú
  menuTrigger.addEventListener('click', function() { // Alternar la clase 'active' en el menú para mostrarlo u ocultarlo
      console.log('Clic en el menú.'); // Agregado para verificar

      nav.classList.toggle('active');
  });
});

