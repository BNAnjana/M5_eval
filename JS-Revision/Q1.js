// Q1. Create a Bank Account (Using Closures for Private State)

function createBankAccount () {
    let balance = 0;
    const transactionHistory = [];

    const deposit = function(amount) {
        if (amount <= 0) {
            return "Error: Deposit amount must be positive.";
        }
        balance += amount;
        transactionHistory.push({ type: 'deposit', amount: amount, date: new Date() });
        return `Deposited $${amount}. New balance: $${balance}.`;
    };

    const withdraw = function(amount) {
        if (amount <= 0) {
            return "Error: Withdrawal amount must be positive.";
        }

        if (amount > balance) {
            return "Error: Insufficient balance.";
        }

        balance -= amount;
        transactionHistory.push({ type: 'withdrawal', amount: amount, date: new Date() });
        return `Withdrew $${amount}. New balance: $${balance}.`;
    };

    const getBalance = function() {
        return balance;
    };

    const getTransactionHistory = function() {
        return [...transactionHistory];
    };
    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance,
        getTransactionHistory: getTransactionHistory
    };
}

const myAccount = createBankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(30));
console.log(myAccount.withdraw(80));
console.log(myAccount.getBalance());
console.log(myAccount.getTransactionHistory());