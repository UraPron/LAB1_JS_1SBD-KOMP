function factorizeNumber() {
    let number = parseInt(document.getElementById("numberInput").value, 10);
    let result = document.getElementById("result");
    result.innerHTML = '';

    if (isNaN(number) || number <= 1) {
        result.innerHTML = "Будь ласка, введіть ціле число більше 1";
    } else {
        result.innerHTML = `Число ${number} розкладається на прості множники: ${factorizeIntoPrimes(number).join(', ')}`;
    }
}

function factorizeIntoPrimes(number) {
    let factors = [];
    for (let factor = 2; factor <= number; factor++) {
        while (number % factor === 0) {
            factors.push(factor);
            number /= factor;
        }
    }
    return factors;
}
