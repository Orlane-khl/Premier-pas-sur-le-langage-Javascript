const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Création des dots 

const dots =document.querySelector(".dots"); //sélectionne l'espace dans dots 


for(var i = 0; i < slides.length; i++ ) {
	const dot = document.createElement("p");  // Crée un p appelé dot 
	dot.classList.add("dot");  //ajoute la classe CSS dot au bouton dot 
	dots.appendChild(dot);  // rajoute le dot dans l'espace dots 
};


//Fonction permettant de changer la classe des dots afin qu'il soit selectionné 

function dot_selected(n) {
	const points = document.querySelectorAll(".dot");
	for (var i = 0; i < slides.length; i++) {
		const point = points[i];
		point.classList.remove("dot_selected");
	}
	const dot_selected = points[n];
	dot_selected.classList.add("dot_selected");
}



//Initialisation de la bannière 

let compteur = 0;
dot_selected(compteur);
let slides_number = document.querySelector(".banner-img");


//Gestion des EventListener

let arrow_left = document.querySelector("#banner .arrow_left");

arrow_left.addEventListener("click", () => {
	compteur--;	
	if (compteur < 0) {
		compteur = slides.length - 1;
	}
	dot_selected(compteur);
	slides_number.src = "./assets/images/slideshow/" + slides[compteur].image;
	document.querySelector("#banner p").innerHTML = slides[compteur].tagLine;
});


let arrow_right = document.querySelector("#banner .arrow_right");

arrow_right.addEventListener("click", () => {
	compteur++;
	if (compteur == slides.length) {
		compteur = 0;
	}
	dot_selected(compteur);
	slides_number.src = "./assets/images/slideshow/" + slides[compteur].image;		// change la slide 
	document.querySelector("#banner p").innerHTML = slides[compteur].tagLine;		// change la tagline 
});





