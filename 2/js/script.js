var first = prompt('Inserisci prima parola');
var second = prompt('Inserisci seconda parola');
var result = '';

firstLen = first.length;
secLen = second.length;

if( firstLen > secLen) {
    result = second + ' ' + first;
} else if (firstLen < secLen) {
    result = first + ' ' + second;
} else {
    result = 'Pari';
}

console.log(result);