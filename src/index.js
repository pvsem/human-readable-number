module.exports = function toReadable(number) {
    const n = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dec = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const arrFromNumber = number.toString().split("").map(Number);
    if (arrFromNumber[1] === 0 && arrFromNumber[2] === 0) {
        return n[arrFromNumber.shift()] + " hundred";
    }
    if (number < 20) {
        return n[number];
    }
    if (arrFromNumber[1] === 0 && arrFromNumber.length === 2) {
        return dec[arrFromNumber[0]];
    }
    if (number >= 20 && number < 100) {
        return dec[arrFromNumber[0]] + " " + n[arrFromNumber[1]];
    }
    if (number >= 100) {
        return (
            n[arrFromNumber.shift()] +
            " hundred " +
            toReadable(+arrFromNumber.join(""))
        );
    }
};
