function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function maxSideLength(x1, y1, x2, y2, x3, y3, x4, y4) {
    const side1 = distance(x1, y1, x2, y2);
    const side2 = distance(x2, y2, x3, y3);
    const side3 = distance(x3, y3, x4, y4);
    const side4 = distance(x4, y4, x1, y1);

    return Math.max(side1, side2, side3, side4);
}

function calculate() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const x3 = parseFloat(document.getElementById('x3').value);
    const x4 = parseFloat(document.getElementById('x4').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const y3 = parseFloat(document.getElementById('y3').value);
    const y4 = parseFloat(document.getElementById('y4').value);

    const maxLength = maxSideLength(x1, y1, x2, y2, x3, y3, x4, y4);
    document.getElementById('result').innerText = "Найбільша сторона чотирикутника має довжину: " + maxLength.toFixed(2);
}