const account = {
  name: 'Stephen Axtell',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function() {

    if (this.expenses.length === 0 && this.income.length === 0) {
      return `${this.name} has no expenses or income`;
    } else {
      let expenseTotal = 0;
      let incomeTotal = 0;
      this.expenses.forEach(function (expense) {
        expenseTotal = expenseTotal + expense.amount;
      });

      this.income.forEach(function (income) {
        incomeTotal = incomeTotal + income.amount;
      });

      const balance = incomeTotal - expenseTotal;

      return `${this.name} has a balance 0f R${balance}. R${incomeTotal} in income. R${expenseTotal} in expenses.`;
    }


  }
};
console.log(account.getAccountSummary());
account.addExpense('Chips', 5);
account.addExpense('Rent', 5000);
account.addExpense('Food', 1000);
account.addExpense('Clothes', 500);

account.addIncome('Salary', 10000);
account.addIncome('Freelance amount', 5000);
account.addIncome('Investment Interest', 1000);

console.log(account.getAccountSummary());
