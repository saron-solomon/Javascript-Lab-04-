
let balance;
let op;
let max = 50000;
let min = 25;

let accounts = new Array();
// Functions
let deposit = function (balance, amount) {
    balance += parseInt(amount);
    return balance;
};

let withdraw = function (balance, amount) {
    if (amount > max) {
        console.log("Maximum is 50000.")
        return balance;
    } else if (amount < min) {
        console.log(" Minimum is 25.")
        return balance;
    } else {
        balance -= amount;
        return balance;
    }
};


let currBalance = function (acc) {
    return acc.balance;
};

let transfer = function (firstAccount, secondAccount, amount) {

    firstAccount.balance = firstAccount.balance - parseInt(amount);
    secondAccount.balance = secondAccount.balance + parseInt(amount);

    return firstAccount, secondAccount;


};

let fetchAccount = function (accName) {
    if (accName === '1000') {
        return accountOne;
    } else if (accName === '1001') {
        return accountTwo;
    } else {
        console.log("Invalid input")
    }
};

let accountOne = {
    name: "1000",
    balance: 150
};

let accountTwo = {
    name: "1001",
    balance: 200
    
};


// user prompt
(function () {



    op = prompt("Choose op: ");


    switch (op) {
        case '+':
            input = prompt("Enter account name: ");
            acc = fetchAccount(input);
            amount = prompt("Enter amount: ");
            acc.balance = deposit(acc.balance, amount);
            console.log("Balance : ", acc.balance);
            break;

        case '=':
            input = prompt("Enter account name: ");
            acc = fetchAccount(input);
            console.log("Balance : ", acc.balance);
            break;

        case '-':
            input = prompt("Enter account name: ");
            acc = fetchAccount(input);
            amount = prompt("Enter amount: ");
            acc.balance = withdraw(acc.balance, amount);
            console.log("Balance : ", acc.balance);

            break;

        case '/':
            input1 = prompt("Enter account name: ");
            transferOne = fetchAccount(input1);
            input2 = prompt("Enter second account name: ");
            transferTwo = fetchAccount(input2);

            amount = prompt("Enter amount: ");
            transferOne, transferTwo = transfer(transferOne, transferTwo, amount);
            console.log("1000 balance is", transferOne.balance);
            console.log("1001 balance is", transferTwo.balance);

            break;



        default: console.log("Invalid input");


    }

})();