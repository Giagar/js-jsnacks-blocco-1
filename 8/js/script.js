var num = prompt('Numero di 4 cifre:');
var result = 0;

if(num.length === 4) {
    for(var i = 0; i < num.length; i++) {
        result += parseInt(num[i]);
    }
} else {
    alert('Inserisci un numero di 4 cifre')
}

console.log(result);