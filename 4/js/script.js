var arr = ['a', 'b', 'c', 'd'];
var user = prompt('Tuo nome:');
var check = false;

for(var i = 0; i < arr.length; i++) {
    if(user === arr[i]) {
        check = true;
    }
}

if(check) {
    alert("Ok, entra.");
} else {
    alert("Non sei in lista, stai fuori.");
}
