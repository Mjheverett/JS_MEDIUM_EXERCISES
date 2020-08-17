function madlib(name, subject) {
    return name + "'s favorite subject in school is " + subject;
}

// console.log(madlib('matthew', 'math'))

function tipAmount(total, service) {
    if (service == 'good') {
        return total * 0.2;
    } else if (service == 'fair') {
        return total * 0.15;
    } else if (service == 'bad') {
        return total * 0.1;
    }
}

// console.log(tipAmount(100, 'fair'))

function tipAmount2(total, service) {
    if (service == 'good') {
        return total * 1.2;
    } else if (service == 'fair') {
        return total * 1.15;
    } else if (service == 'bad') {
        return total * 1.1;
    }
}

// console.log(tipAmount2(100, 'good'))

function printNumbersFor(x, y) {
    let i = 0;
    for (i = x; i < (y + 1); i++) {
        console.log(i);
    }
}

function printNumbersWhile(x, y) {
    while (x < (y + 1)) {
        console.log(x);
        x++;
    }
}

// printNumbersFor(1, 10)
// printNumbersWhile(1, 10)

function printSquare(num) {
    let x ;
    for (x = 0; x < num; x++) {
        console.log("*".repeat(num));
    }
}

// printSquare(5)

function printBox(x, y) {

}

// printBox(6, 4)

function printBanner(inputString) {
    stringLong = inputString.length;
    console.log('-'.repeat(stringLong + 4))
    console.log('- ' + inputString + ' -')
    console.log('-'.repeat(stringLong + 4))
}

// printBanner('Welcome to DigitalCrafts')

function leetSpeek(inputString) {
    stringLong = inputString.length;
    x = 0;
    let outputString = '';
    for (x = 0; x < stringLong; x++) {
        if (inputString[x] == 'a') {
            outputString += '4';
        } else if (inputString[x] == 'e') {
            outputString += '3';
        } else if (inputString[x] == 'g') {
            outputString += '6';
        } else if (inputString[x] == 'i') {
            outputString += '1';
        } else if (inputString[x] == 'o') {
            outputString += '0';
        } else if (inputString[x] == 's') {
            outputString += '5';
        } else if (inputString[x] == 't') {
            outputString += '7';
        } else {
            outputString += inputString[x];
        }
    }
    return outputString;
}

// console.log(leetSpeek('leet'))

function longLongVowels(inputString) {
    if (inputString.includes('aa')) {
        outputString = inputString.replace('aa', 'aaaaa');
    } else if (inputString.includes('ee')) {
        outputString = inputString.replace('ee', 'eeeee');
    } else if (inputString.includes('ii')) {
        outputString = inputString.replace('ii', 'iiiii');
    } else if (inputString.includes('oo')) {
        outputString = inputString.replace('oo', 'ooooo');
    } else if (inputString.includes('uu')) {
        outputString = inputString.replace('uu', 'uuuuu');
    }
    return outputString;
}

// console.log(longLongVowels('Good'))

function positiveNumbers(arr) {
    arrLong = arr.length;
    let arrOut = [];
    for (x = 0; x < arrLong; x++) {
        if (arr[x] >= 0) {
            arrOut.push(arr[x]);
        }
    }
    return arrOut;
}

// console.log(positiveNumbers([1, -3, 5, -3, 0]))

function cipher(cipherString, offset) {
    let cipheredString = '';
    cipherLong = cipherString.length;
    
    return cipheredString;
}

cipher('Genius without education is like silver in the mine')

function decipher(decipherString, offset) {

}

cipher('asdf;lkjasdgf')