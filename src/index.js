module.exports = function toReadable (number) {
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let lastDigit = number % 10;
    
    if (number < 20) { 
        return num[number];
    } else if (number < 100) {
        return tens[Math.floor(number/10)-2] + (lastDigit? " " + num[lastDigit]: "");
    } else if (number < 1000) {
        return num[Math.floor(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
    } else {
        return toReadable(Math.floor(number/1000)) + " thousand" + (number%1000 != 0? " " + toReadable(number%1000): "");
    }
}