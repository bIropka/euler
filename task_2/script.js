console.log(getSumma(4000000));

function getSumma(number) {

    var summa = 2,
        prev = 1,
        next = 2,
        buf = 0;

    while (next < number) {

        buf = prev + next;

        if(buf % 2 === 0) {
            summa += buf;
        }

        prev = next;
        next = buf;

    }

    return summa;

}