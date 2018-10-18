console.log(numbersSumm(1000));

function numbersSumm(number) {

    var summa = 0;

    for(var i = 0; i < number; i++) {

        if(i % 3 === 0 || i % 5 === 0) {
            summa += i;
        }

    }

    return summa;

}