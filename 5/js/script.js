var arr = [];
var num = 0;

for (var i = 1; i <= 6; i++) {
    num = parseInt(prompt('Numero:'));
    if(num % 2 !== 0) {
        arr.push(i);
    }
}

console.log(arr);