var isPrime = getEratosthen(10000);

console.log(getResult(501));

function getResult(divisors) {

    var currentDivisors = 0,
        currentTriangle = 0,
        currentIndex = 0;

    while (currentDivisors <= divisors) {
        currentTriangle = ++currentIndex + currentTriangle;
        currentDivisors = getCurrentDivisors(currentTriangle, isPrime);
    }

    return currentTriangle;

}

function getCurrentDivisors(number, isPrime) {
    var primes = 0;
    while(number > 0) {

    }
}

function getEratosthen(limit) {
    var result = [true, true, true];
    for (var i = 2; i <= limit; i++) {
        if (result[i] === false) {
            continue;
        } else {
            result[i] = true;
        }
        for (var j = i * 2; j <= limit; j += i) {
            result[j] = false;
        }
    }
    return result;
}
