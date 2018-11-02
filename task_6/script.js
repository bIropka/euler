console.log(getNumber(100));

function getNumber(number) {

    var summa = 0, pow = 0;

    for (var i = 1; i <= number; i++) {

        summa += i*i;

        pow += i;

    }

    return pow*pow - summa;

}