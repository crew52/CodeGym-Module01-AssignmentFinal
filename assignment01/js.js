function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getArraySizeLessThan50() {
    let n;
    do {
        n = +prompt("Enter the number of elements in the array a (n <= 50):");
        if (n > 50) {
            alert("Number of elements cannot exceed 50. Please re-enter.");
        }
    } while (n > 50);
    return n;
}

function getArray(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(+prompt(`Enter element a[${i}]:`));
    }
    return a;
}

function getPrimeArray(a) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i])) {
            b.push(a[i]);
        }
    }
    return b;
}

function main() {
    let n = getArraySizeLessThan50();
    let a = getArray(n);
    let b = getPrimeArray(a);
    console.log("Array a:", a);
    console.log("Array b (contains prime numbers):", b);
}

main();
