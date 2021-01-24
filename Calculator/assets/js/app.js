
let op;
let ans;
let firstNum;
let secondNum;
let nums = new Array();

let add = function (nums) {
    let sum = 0;
    nums.forEach(num => {
        sum += parseInt(num)
    });
    return sum;
};
let subtract = function (firstNum, secondNum) {
    return firstNum - secondNum;
};

let multiply = function (nums) {
    let product = 1
    nums.forEach(num => {
        product *= num
    });
    return product;

};

let divide = function (firstNum, secondNum) {
    if (parseInt(secondNum) === 0) {
        return "Can't divide by zero";
    } else {
        return firstNum / secondNum;
    }
};



(function () {



    op = prompt("Choose operation: ");


    switch (op) {
        case '+':
            input = prompt("How many numbers to add ");
            for (let i = 0; i < parseInt(input); i++) {
                nums[i] = prompt(" Enter number" + (i + 1));
            }
            ans = add(nums);
            console.log(ans);
            break;

        case '-':
            firstNum = prompt("Enter first number: ");
            secondNum = prompt("Enter second number: ");

            ans = subtract(firstNum, secondNum);
            console.log(ans);
            break;
        case '*':
            input = prompt("How many numbers to multiply ");
            for (let i = 0; i < parseInt(input); i++) {
                nums[i] = prompt(" Enter number" + (i + 1));
            }
            ans = multiply(nums);
            console.log(ans);
            break;
        case '/':
            firstNum = prompt("Enter first number: ");
            secondNum = prompt("Enter second number: ");

            ans = divide(firstNum, secondNum);
            console.log(ans);
            break;


        default: console.log("Invalid input");


    }

})();