console.log(getBiggestPrimeFactor(600851475143));

function isPrime(number) {

    for (var i = 2; i < Math.sqrt(number); i++) {

        if (number % i === 0)  return false;

    }

    return true;

}

function getBiggestPrimeFactor(number) {

    for (var i = Math.round(Math.sqrt(number)); i > 1 ; i--) {

        if (number % i === 0 && isPrime(i))  return i;

    }

    return 'error!!!';

}