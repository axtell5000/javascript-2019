const myAccount = {
  name: 'Stephen Axtell',
  expenses: 0,
  income: 0
};

const addExpense = function (account, amount) {
  // account = {}; //this will create a new object, not override the existing one
  account.expenses = account.expenses + amount;
  console.log(account);
};

const addIncome = function (account, amount) {
  account.income = account.income + amount;
  console.log(account);
};

const resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
  console.log(account);
};

const accountSummary = function (account) {
  console.log(`This account is for ${account.name}`);
  console.log(`The expenses for the account:  ${account.expenses}`);
  console.log(`The income for the account: ${account.income}`);
};

const otherAccount = myAccount; // references myAccount in memory  so changes to otherAccount will change myAccount
otherAccount.income = 1000;

addExpense(myAccount, 10);
console.log(myAccount);

addExpense(myAccount, 100);
addIncome(myAccount, 1000);
addExpense(myAccount, 200);
accountSummary(myAccount);
resetAccount(myAccount);
