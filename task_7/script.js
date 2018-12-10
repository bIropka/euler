console.log('answer: ' + getResult(10001)); //result=104743

function getResult(number) {

    var primes = [false, false],
        result = checkPrimes(number, primes),
        primesLimit = number;

    while(!result) {
        primesLimit *= 10;
        primes = getEratosthen(primesLimit, primes);
        result = checkPrimes(number, primes);
    }

    return result;

}

function checkPrimes(number, array) {
    var result = 0;
    for(var i = 2; i < array.length; i++) {
        if(array[i]) {
            result++;
            if(result === number) {
                return i;
            }
        }
    }
    return false;
}

function getEratosthen(number, array) {
    for(var i = 2; i <= number; i++) {
        if(array[i] === false) {
            continue;
        } else {
            array[i] = true;
        }
        for(var j = i*2; j<= number; j+=i) {
            array[j] = false;
        }
    }
    return array;
}


