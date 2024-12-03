function validateRequired(value) {
    return value.trim() !== '';
}

function validateLength(value, maxLength) {
    return value.length <= maxLength;
}

function validateDateFormat(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}

function validateNumber(value) {
    return !isNaN(value) && value > 0;
}

function validateAllFields(bookCode, savingsType, customerName, idCard, openingDate, depositAmount) {
    if (!validateRequired(bookCode) || !validateRequired(savingsType) || !validateRequired(customerName) ||
        !validateRequired(idCard) || !validateRequired(openingDate) || !validateRequired(depositAmount)) {
        return "Please fill in all fields.";
    }

    if (!validateLength(bookCode, 5)) {
        return "Book code must be at most 5 characters.";
    }

    if (!validateLength(savingsType, 10)) {
        return "Savings type must be at most 10 characters.";
    }

    if (!validateLength(customerName, 30)) {
        return "Customer name must be at most 30 characters.";
    }

    if (!validateDateFormat(openingDate)) {
        return "Please enter a valid date in the format YYYY-MM-DD.";
    }

    if (!validateNumber(depositAmount)) {
        return "Deposit amount must be a positive number.";
    }

    return null;
}
