import { Wallet, User, Transaction } from "./types";

const user: User = {
  name: "Marcelo",
  login: "teste",
  enable: true,
  password: "123",
};
const walletUser: Wallet = {
  enable: true,
  owner: user,
  transactions: [],
};

function addTransaction(wallet: Wallet, transaction: Transaction) {
  wallet.transactions.push(transaction);
}

function printTransactions(wallet: Wallet) {
  // const transactions = wallet.transactions;
  const { transactions, owner } = wallet;

  console.log(`Está carteira é do (a) ${owner.name}\n `);

  transactions.forEach((item) =>
    console.log(
      `Transação:${item.description}\n Valor: R$${item.value}\n Tipo:${item.type}\n`
    )
  );
}

function balance(wallet: Wallet): number {
  const { transactions } = wallet;
  let saldo = 0;

  transactions.forEach((item) => {
    if (item.type === "C") {
      saldo += item.value;
    } else {
      saldo -= item.value;
    }
  });

  return saldo;
}

addTransaction(walletUser, { description: "mercado2", type: "D", value: 200 });
addTransaction(walletUser, { description: "shopping", type: "D", value: 2000 });
addTransaction(walletUser, { description: "salario", type: "C", value: 20000 });

/* printTransactions(walletUser); */

const saldo = balance(walletUser);
console.log(`Seu saldo é R$:${saldo}.`);
