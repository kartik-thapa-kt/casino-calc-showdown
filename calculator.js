// Casino Calculator Operations
function processNumbers(num1, num2) {
    // Main calculation logic - customize this as needed
    const sum = num1 + num2;
    const result = sum % 2; // Returns 1 if odd sum, 0 if even sum
    
    let output1 = null;
    let output2 = null;
    let message = null;
    
    if (result === 1) {
        // Generate two bonus outputs when result is 1
        output1 = num1 * num2; // Multiplication
        output2 = Math.abs(num1 - num2); // Absolute difference
    } else {
        // Generate message when result is 0
        message = `The sum ${sum} is even. House wins this round!`;
    }
    
    return {
        mainResult: result,
        output1: output1,
        output2: output2,
        message: message
    };
}

// Alternative calculation functions - you can modify these as needed
function alternativeCalculation(num1, num2) {
    // Example: Different logic for determining win/lose
    const product = num1 * num2;
    const result = product > 100 ? 1 : 0;
    
    let output1 = null;
    let output2 = null;
    let message = null;
    
    if (result === 1) {
        output1 = Math.floor(product / 10);
        output2 = product % 10;
    } else {
        message = `Product ${product} is too low. Try bigger numbers!`;
    }
    
    return {
        mainResult: result,
        output1: output1,
        output2: output2,
        message: message
    };
}

// Export for use in app.js (if using modules, otherwise just global functions)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { processNumbers, alternativeCalculation };
}