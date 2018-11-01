console.log(getNumber(3));

function getNumber(degree) {

    var max = Math.pow(10, degree) - 1,
        min = Math.pow(10, degree - 1),
        result = 0;

    for (var i = max; i > min; i--) {

        for (var j = max; j > min; j--) {

            if (isPalindrom(i * j)) {

                if (result < i * j) {
                    result = i * j;
                }

            }

        }

    }

    return (result === 0) ? 'absent' : result;

}

function isPalindrom(number) {

    var start = number, reverted = 0;

    while (start > 1) {
        reverted = reverted * 10 + (start % 10);
        start = Math.floor(start / 10);
    }

    return number === reverted;

}

/*function isPalindrom(number) {

    var reverted = '' + number, array = reverted.split('').reverse();
    reverted = array.join('');
    return '' + number === reverted;

}*/