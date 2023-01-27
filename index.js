const readline = require("readline");

//reading input and showing output in terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//storing all the bank account data
let bankAccount = {};

console.log("Welcome to CLI Bank Application");
console.log("ENTER COMMAND");

rl.on("line", (input) => {
  input = input.split(" ");
  let code = input[0];
  let accountName = input[1].trim();
  let action = input[2];
  switch (code) {
    case "CREATE":
      createBankAccount(code, accountName,action);
      break;
    case "DEPOSIT":
      depositAmount(code, accountName, action);
      break;
    case "WITHDRAW":
      withdrawAmount(code, accountName, action);
      break;
    case "BALANCE":
      showBalance(code, accountName);
      break;
    default:
      console.log("Invalid Credential, Please Try Again!!");
  }
});

const createBankAccount = (code, accountName, action) => {
  bankAccount[accountName] = {
    accountName: action,
    balance: 0,
  };
  //console.log(`Account created with code:${code} and name ${accountName}`);
  //console.log(bankAccount);
};

const depositAmount = (code, accountName, action) => {
  if (bankAccount[accountName]) {
    bankAccount[accountName].balance += Number(action);
    //console.log(`Amount ${action} is ${code} in your ${accountName}`);
    //console.log(bankAccount);
  } else if (!bankAccount[accountName]) {
    console.log(`Account ${accountName} does not exist`);
  }
};

const withdrawAmount = (code, accountName, action) => {
  if (bankAccount[accountName]) {
    bankAccount[accountName].balance -= Number(action);
    //console.log(`Amount ${action} is ${code} in your ${accountName}`);
    //console.log(bankAccount);
  } else if (!bankAccount[accountName]) {
    console.log(`Account ${accountName} does not exist`);
  }
};

const showBalance = (code, accountName) => {
  if (bankAccount[accountName]) {
    console.log(`${bankAccount[accountName].accountName} ${bankAccount[accountName].balance}  `);
    //console.log(bankAccount);
  } else if (!bankAccount[accountName]) {
    console.log(`${accountName} does not exist`);
  }
};
