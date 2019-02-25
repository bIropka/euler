console.log(getResult(500));

function getResult(divisors) {

    var currentDivisors = 0,
        currentTriangle = 0,
        currentIndex = 0;

    while (currentDivisors <= divisors) {
        currentTriangle = ++currentIndex + currentTriangle;
        currentDivisors = getCurrentDivisors(currentTriangle);
    }

    return currentTriangle;

}

function getCurrentDivisors(number) {

}
