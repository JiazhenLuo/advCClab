const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function generateRandomItem() {
    if (Math.random() < 0.5) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const wordLength = Math.floor(Math.random() * (12 - 4 + 1)) + 4; 
        let word = '';

        for (let i = 0; i < wordLength; i++) {
            let char = letters.charAt(Math.floor(Math.random() * letters.length));
            if (i === 0) {
                char = char.toUpperCase();
            }

            word += char;
        }

        return word;
    } else {
        const digits = Math.floor(Math.random() * (9 - 1 + 1)) + 1; 
        let number = '';

        for (let i = 0; i < digits; i++) {
            const digit = Math.floor(Math.random() * 10); 
            number += digit.toString();
        }

        return number;
    }
}

function calculate() {
    try {

        eval(display.value);
        clearDisplay(); 

        const item = generateRandomItem(); 

        let index = 0;
        function showChar() {
            if (index < item.length) {
                appendToDisplay(item.charAt(index));
                index++;
                setTimeout(showChar, 120); 
            }
        }

        showChar(); 
    } catch (error) {
        display.value = "Hello, World"; 
    }
}

AOS.init({
    duration: 2000,
  });