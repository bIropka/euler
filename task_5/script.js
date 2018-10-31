var startTime, finishTime;

startTime = new Date();
console.log(getNumber(20));
finishTime = new Date();

console.log((finishTime - startTime)/1000 + ' sec');

function getNumber(number) {

    var result = number, done = false;

    while(!done) {

        result++;

        if (checkResult(result, number)) done = true;

    }

    return result;

}

function checkResult(result, number) {

    for (var i = number; i > number / 2; i--) {
        if (result % i !== 0) return false;
    }

    return true;

}

/*function getNumber(number) {

    var primeDenominator = getPrimesDenominator(number), done = false, result = primeDenominator;

    while (!done) {

        if (checkResult(result, number)) {
            done = true;
        } else {
            result += primeDenominator;
        }

    }

    return result;

}

function getPrimesDenominator (number) {

    var array = [false, false], result = 1;

    for(var i = 2; i <= number; i++) {

        if(typeof array[i] === 'undefined') {

            array[i] = true;
            result *= i;

            for(var j = i*2; j <= number; j+= i) {

                if(typeof array[j] === 'undefined') {
                    array[j] = false;
                }

            }

        }

    }

    return result;

}*/