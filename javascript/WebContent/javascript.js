function changerTaille() {

	var texte = document.getElementById("texte");

	if (texte.style.fontSize == "") {

		texte.style.fontSize = "x-large";

	} else {
		texte.style.fontSize = "";
	}

}

function augmenter() {

	var hauteur = parseInt(document.getElementById("carre").clientHeight);
	
	hauteur = hauteur + 10;

	document.getElementById("carre").style.height = hauteur + "px";

	if (hauteur >= 300) {

		hauteur = 100;
		document.getElementById("carre").style.height = hauteur + "px";
	}

}

function vert() {

	var color = document.getElementById("carre");

	// console.log(document.getElementById("carre")).style;
	color.style.backgroundColor = "green";

}

function colini() {

	var color = document.getElementById("carre");

	var touche = parseInt(document.getElementById("carre").style.marginTop);
	
	// console.log(document.getElementById("carre")).style;

	if (color.style.backgroundColor == "green") {

		color.style.backgroundColor = "blue";

	}
	if(touche <= 100){
		
		touche=300;
		document.getElementById("carre").style.marginTop = touche + "px";
		
	}

}
function cache() {

	var cache = document.getElementById("carre");

	cache.style.visibility = "hidden";
}

function apparait() {

	var block = document.getElementById("carre");

	if (block.style.visibility == "hidden") {

		block.style.visibility = "initial";

	}

}

function monter(){
	
	
	if(event.keyCode == 38){
		
		var touche = parseInt(document.getElementById("carre").style.marginTop);
		
		console.log(touche);	
		
		touche = touche - 10;

		document.getElementById("carre").style.marginTop = touche + "px";
		
	}
	
}

function jeu(){
	
	var quest = prompt("devine le nombre entre 10 et 20 ");
	
	console.log(quest);
	
	var reponse = Math.floor((Math.random()*20)+10);
	
	console.log(reponse);
	
	do{
		if(quest<reponse){
			quest=prompt("C'est plus");
		}else if(quest>reponse){
			quest=prompt("c'est moins");
		
		}
		}while(quest==reponse);
	
	alert("gg");
	}

//commentaire