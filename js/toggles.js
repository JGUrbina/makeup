document.addEventListener("DOMContentLoaded", () => {

	// Toggles
	function visible(botton, item) {
		let btnmenu = document.getElementById(botton);
		btnmenu.addEventListener('click',  () => {
			let toggle = document.getElementById(item);
			toggle.classList.toggle('opened');
		});
	}
	function visible2(botton, item, item2) {
		let btnmenu = document.getElementById(botton);
		btnmenu.addEventListener('click',  () => {
			let toggle = document.getElementById(item);
			let visible = document.getElementById(item2);
			visible.classList.toggle('visible');
			btnmenu.classList.toggle('opened');
			toggle.classList.toggle('opened');
		});
	}

	visible('toggle1', 'main-menu');
	visible2('search-icon', 'tached', 'search-form');


	
// menu con submenú

document.addEventListener('click',	(event) => {
	
	// verifica que el boton clicado sea hijo de un elemento li
	if (event.toElement.tagName == 'A' && event.srcElement.parentElement.tagName == 'LI') {

		let btnTrue = event.srcElement.children;
		// verifica que el elemento a tenga hijos
		if(btnTrue.length > 0) {
			// verifica que el elemento hijo sea un i
			if(btnTrue[0].tagName == 'I') {
				// verifica que el elemento hijo i contega la clase 'icon-angle-right'
				let btnTrue = event.srcElement.children[0].classList.contains('icon-angle-right');
				if(btnTrue) {
				// se le agrega una clase al elemto que queremos mostrar
					event.srcElement.children[0].classList.toggle('rotate-90');
				 	event.srcElement.parentElement.children[1].classList.toggle('h-100');

				}
			}



		}

	}
});

});


// carrusel sin animacion, esta funcion es llamada desde el html cada que se de da click
// en algunos de estos items related-post__tabs-item
function positionColection(n) {
	let colectionItem = document.getElementsByClassName('related-post__tabs-item');
	let containerReletedPost = document.getElementsByClassName('related-post-container');
	let reletedPost = containerReletedPost[0].children;

	// oculta todos los items del carrusel
	for (let i = 0; i < reletedPost.length; i++) {
		reletedPost[i].style.display = 'none';
		colectionItem[i].className = colectionItem[i].className.replace(" rpi1", "");
		
	}

	// Muestra el item y el boton que corresponde
	reletedPost[n].style.display = 'block';
	colectionItem[n].className += " rpi1";

	
}






		