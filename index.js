var numberToGuess = Math.floor(Math.random() * 6 + 1);
var counter = 1;


function verifyGuess(){
	essaiJS = document.getElementById("essai").value;
	document.getElementById("print_try").innerHTML = "Vous avez entré la valeur : " + essaiJS; /*j'affiche la valeur avant de la modifier*/
	essaiJS = Number(essaiJS);
	document.getElementById('essai').value=""; /*vide le champ après avoir appuyé sur le bouton*/
	
	if(Number.isInteger(essaiJS) && essaiJS<=6 && essaiJS>=1){ /*je vérifie si l'entrée est bien un nombre entier entre 1 et 6. Sinon, je renvoie un message indiquant au joueur quoi rentrer*/
		if(essaiJS < numberToGuess){
			document.getElementById("clue").innerHTML = "Perdu ! Trop petit ! Try again";
		}
		else if(essaiJS > numberToGuess){
			document.getElementById("clue").innerHTML ="Perdu ! Trop grand ! Try again";
		}
		else{
			document.getElementById("clue").innerHTML ="Bravo.";
			if(counter == 1){ /*je mets au pluriel ou non selon le nombre d'essais*/
				mot = "essai"
			}
			else{
				mot = "essais"
			}
			document.getElementById("end").innerHTML ="Vous avez trouvé en " + counter + " " + mot + ". Vous méritez une médaille.";
			document.getElementById("button-appear").innerHTML = '<button id="buttonRefresh" onclick="window.location.reload(false)">S\'échapper</button>';
		}
		counter++; /*incrémentation du compteur d'essais*/

	}
	else{
		document.getElementById("clue").innerHTML = "Faites un effort, vous devez entrer un nombre entier entre 1 et 6.";
	}

}




var refresh = window.getElementById('refresh');
refresh.addEventListener('click', location.reload(), false);