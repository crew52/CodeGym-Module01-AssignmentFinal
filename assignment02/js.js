function areFractionsEqual(num1, den1, num2, den2) {
    return num1 * den2 === num2 * den1;
}

function checkFractions() {
    let num1 = +prompt("Enter the numerator of the first fraction:");
    let den1 = +prompt("Enter the denominator of the first fraction:");
    let num2 = +prompt("Enter the numerator of the second fraction:");
    let den2 = +prompt("Enter the denominator of the second fraction:");

    if (den1 === 0 || den2 === 0) {
        alert("Denominator cannot be zero!");
        return;
    }

    if (areFractionsEqual(num1, den1, num2, den2)) {
        alert("The two fractions are equal.");
    } else {
        alert("The two fractions are not equal.");
    }
}

checkFractions();
