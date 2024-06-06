function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculateLCM() {
    let num1 = parseInt(document.getElementById("number1").value, 10);
    let num2 = parseInt(document.getElementById("number2").value, 10);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2) || num1 < 10 || num1 > 99 || num2 < 10 || num2 > 99) {
        result.innerHTML = "Будь ласка, введіть два двоцифрових натуральних числа від 10 до 99.";
    } else {
        let lcmResult = lcm(num1, num2);
        result.innerHTML = `НСК чисел ${num1} і ${num2} дорівнює ${lcmResult}.`;
    }
}
