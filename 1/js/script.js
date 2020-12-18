var primoNum = parseInt(prompt('Inserisci primo numero'));
var secondoNum = parseInt(prompt('Inserisci secondo numero'));

if(primoNum > secondoNum) {
    console.log(primoNum);
} else if (primoNum < secondoNum) {
    console.log(secondoNum);
} else {
    console.log('Pari');
}