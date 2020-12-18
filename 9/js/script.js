var sum = 0;
var average = 0;

// scelgo di escludere lo 0, altrimenti nella media dovrei dividere per 11
for (var i = 1; i <= 10; i++) {
    sum += i;
}

average = sum / 10;

console.log('Somma: ' + sum + '; media: ' + average);