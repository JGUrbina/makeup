// Verifica que el documento html este cargado para ejecutarse
document.addEventListener("DOMContentLoaded", () => {
	

	// se ejecuta cada vez que la vetana es redimencionada 
	window.addEventListener('resize', () => {
		resize();
	});


	function resize() {

		let slideHeight = document.getElementsByClassName('slider__item')[0].clientHeight;
		let slide = document.getElementsByClassName('slider')[0];
		let mainSlider = document.getElementsByClassName('main-slider')[0];
		slide.style.maxHeight = slideHeight + 'px';
		slide.style.overflow = 'hidden';
		mainSlider.style.height = slideHeight + 'px';
	}

	// se ejecuta al cargar el documento html
	resize();

});
// cierre del verificador de cargar del html

// variables
let indice = 1;
let cont = 0;

// Se ejeucuta cada 4s
setInterval(function time() {
	visibilitySlide(indice+=1)
},4000);

// Indica que item del slider (ó carrusel) se esta mostrando
function visibilitySlide(n) {
	// slider principal
	let slides = document.getElementsByClassName('slider__item');
	let controls = document.getElementsByClassName('slider-tabs__button');
	let i;

	// verifica que el tamaño del slider y que llegado al final vuelva al inicio
	if(n > slides.length) {
		indice = 1;
	}
	// llegaro al origen inicie nuevamente por la ultmima posición
	if(n < 1) {
		indice = slides.length;
	}

	// if(indice > 2) {
	// 	indice = 1;
	// }
	// oculta todos los items del slider
	for (i = 0; i < slides.length; i++) {
		slides[i].style.opacity = 0;
		slides[i].style.zIndex = -1;
		slides[i].style.position = 'absolute';
	}

	// quita la clase active de los botones del slider
	for (i = 0; i < controls.length; i++) {
		controls[i].className = controls[i].className.replace(" active", "");
	}
	// Muestra el item y el boton que corresponde
	slides[indice-1].style.opacity = 1;
	slides[indice-1].style.zIndex = 2;
	slides[indice-1].style.display = 'block';
	slides[indice-1].style.position = 'relative';
	slides[indice-1].style.transition = 'opacity 100ms ease-in-out 0s';
	controls[indice-1].className += ' active';


		// carrusel sin animaciones

		let carruselItem = document.getElementsByClassName('featured-item');
		let controlsCarrusel = document.getElementsByClassName('carrusel-tabs__button');

		// oculta todos los items del carrusel
		for (i = 0; i < carruselItem.length; i++) {
			carruselItem[i].style.display = "none";
		}
		
		// quita la clase active de los botones del carrusel 
		for (i = 0; i < controlsCarrusel.length; i++) {
			controlsCarrusel[i].className = controlsCarrusel[i].className.replace(" active", "");
		}

		// Muestra el item y el boton que corresponde
		carruselItem[indice-1].style.display = 'block';
		controlsCarrusel[indice-1].className += ' active';

		
		// Blog mid

		let bloMid = document.getElementsByClassName('blog-mid__container-item')[0];
		let bloMidItem = bloMid.children;

			// muetra todos los items
			for (i = 0; i < bloMidItem.length; i++) {

				bloMidItem[i].style.display = "block";
			}
			// verifica que hayan items y oculta el correspondiente
			if (cont < bloMidItem.length) {
				bloMidItem[cont].style.display = 'none';
				cont++;
			}
			// verifica que el tamaño del slider y que llegado al final vuelva al inicio
			if(cont == bloMidItem.length) {
				cont = 0;
			}
		}

		// se ejecuta cada vez que es precionado el boton next
		function nextSlide() {
			visibilitySlide(indice += 1);
		}
		// se ejecuta cada vez que es precionado el boton previous
		function previousSlide() {
			visibilitySlide(indice -= 1);
		}

		// indica la posicion de los items
		function positionSlide(n) {
			visibilitySlide(indice = n);
		}