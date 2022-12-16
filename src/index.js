module.exports = function reverse(n) {
    let number = Math.abs(n);
    let reverseNumber = String(number).split("").reverse().join("");
    return reverseNumber;
};
