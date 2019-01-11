console.log(getNumber(2000000));

function getNumber(number) {

    var primes = [false, false],
        result = 0;

    for(var i = 2; i < number; i++) {
        if(typeof primes[i] === 'undefined') {
            result += i;
            primes[i] = true;
            for(var j = i*2; j < number; j += i) {
                primes[j] = false;
            }
        }
    }

    return result;

}