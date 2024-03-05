function addition(num1,num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Please enter a number.");
    } else {
    return num1+num2;
    };
};


function subtract(num1,num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Please enter a number.");
    } else {
    return num1-num2;
    };
};

function multiply(num1,num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Please enter a number.");
    } else {
    return num1*num2;
    };
};

function divide(num1,num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input. Please enter a number.");

    }else if(num2 === 0) {
        throw new Error("Division by zero is not allowed.");
    } else {
        return num1/num2;
    };
};

// module.exports = addition;
// module.exports = subtract;
module.exports = {addition, subtract, multiply, divide}; 
