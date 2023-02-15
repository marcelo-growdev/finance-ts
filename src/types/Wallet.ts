import Transaction from "./Transaction";
import User from "./User";

interface Wallet {
  owner: User;
  enable: boolean;
  transactions: Transaction[];
}

export default Wallet;
