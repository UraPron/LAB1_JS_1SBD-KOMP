function findAndDisplayRemainder() {
    var numberInput = document.getElementById("numberInput").value;
    var resultParagraph = document.getElementById("result");
    
    if (numberInput.length !== 5) {
        resultParagraph.textContent = "Будь ласка, введіть 5-цифрове число.";
        return;
    }

    var remainder = findRemainder(parseInt(numberInput));
    resultParagraph.textContent = "Остача від ділення першої цифри на останню: " + remainder;
}

function findRemainder(number) {
    var numStr = number.toString();
    var firstDigit = parseInt(numStr[0]);
    var lastDigit = parseInt(numStr[numStr.length - 1]);
    var remainder = firstDigit % lastDigit;
    return remainder;
}