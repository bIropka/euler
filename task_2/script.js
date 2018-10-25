console.log(getSumma(4000000));

function getSumma(number) {

    var summa = 2,
        prev = 1,
        next = 2,
        buf = 0;

    while (next < number) {

        buf = prev + next;

        if(buf % 2 === 0) {
            summa += buf;
        }

        prev = next;
        next = buf;

    }

    return summa;

}

/*var array = [0, 1];

for (var i = 2; i <= 100; i++) {
    array[i] = array[i - 2] + array[i - 1];
}

var filterArra = array.filter(function (el) {
    if (el % 2 === 0 && el < 4000000) return el
});

var summ = filterArra.reduce(function (sum, current) {
    return sum + current;
}, 0);

console.log(summ);*/