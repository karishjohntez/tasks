
function checkCounts() {
const number = parseInt(document.getElementById('countInput').value);
let numberOfDigits = 0;
let tempNumber = Math.abs(number); 

for (let n = tempNumber; n >= 1; n = Math.floor(n / 10)) {
    numberOfDigits++;
}

const midPoint = Math.floor(numberOfDigits / 2);
const middleDigit = numberOfDigits % 2 === 1 ? Math.floor(number / Math.pow(10, midPoint)) % 10 : '';
document.getElementById('results').innerText = numberOfDigits % 2 === 0 ? 'The number of digits is even.' : `The number of digits is odd. The middle digit is ${middleDigit}.`;
}
