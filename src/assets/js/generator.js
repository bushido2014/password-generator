//cifre
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// litere mici
var num2 = [
'a','b', 'c', 'd','e', 'f','g','h', 'i','j','k', 'l','m', 'n',
'p', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'
];
//litere mari
var num3 = [
'A','B', 'C', 'D','E', 'F','G','H', 'I','J','K', 'L','M', 'N',
'P', 'R', 'S', 'T', 'U', 'V', 'W','X', 'U', 'Z'
];
//cifre speciale
var num4 = [
  '!', '()', '[', ']', '[]','-', '%', '@', '#', '$','/', '+','_', '='
];


document.getElementById('slider-nummer').oninput = function () {
	//marirea si scaderea cifrelor
	document.getElementById('pass-length').innerHTML = this.value;
}

generatePass(); //start functiei de parole

document.getElementById('CreatePass').onclick = generatePass;

function generatePass() {
  
   var resultPSW = [];
    //verificare
   if(document.getElementById('checkbox1').checked) {
      // daca sunt cifre checked
    resultPSW = resultPSW.concat(num1);
   }
   if(document.getElementById('checkbox2').checked) {
        //daca sunt litere mici checked
    resultPSW = resultPSW.concat(num2);
   }
   if(document.getElementById('checkbox3').checked) {
       //daca sunt litere mari checked
    resultPSW = resultPSW.concat(num3);
   }
   if(document.getElementById('checkbox4').checked) {
     //daca sunt simbole speciale pentru password checked
    resultPSW = resultPSW.concat(num4);
   }

   //functia de amestecat toate simboluri,cifre, litere
    resultPSW.sort(compareRandom); 
   //console.log(resultPSW);

   
   document.getElementById('resultat').innerHTML = ''; // resultat parole ca sa fie massiv gol
   //ciclu ca sa apara mai multe parole
   for (var p = 0; p < 5; p++) {
     
   
   var pass = ''; // viitoare parola
   var passwLength = parseInt(document.getElementById('slider-nummer').value); // lungimea parolei

   for (var i = 0; i < passwLength; i++) {
    //ciclu pentru lungimea parolei
    // aleg random numar din massiv
     pass += resultPSW[randomInteger(0, resultPSW.length - 1)];

   }
  //console.log(pass);

   
   document.getElementById('resultat').innerHTML += '<p>' + pass + '</p>';


  }

}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}