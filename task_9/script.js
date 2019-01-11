console.log(getNumber(1000));

function getNumber(number) {

    var c;

    for (var a = 2; a <= number - 5; a++) {
        for (var b = a + 1; b <= number - a; b++) {
            c = Math.sqrt(a*a + b*b);
            if (c === (c ^ 0)) {
                if (a + b + c === number) {
                    return a*b*c + ' = ' + a + ' + '+ b + ' + ' + c;
                }
            }
        }
    }

    return 'no result, error!!!';

}