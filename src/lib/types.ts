export type User = {
  userId: number;
  name: string;
  img: string;
};

export type Balance = {
  userId: number;
  current: number;
  income: number;
  expenses: number;
};

export type Pot = {
  userId: number;
  savings: number;
  gift: number;
  concert_ticked: number;
  new_laptop: number;
  total_saved: number;
};

export type Budget = {
  userId: number;
  entertainment: number;
  bills: number;
  dining_out: number;
  personal_care: number;
};

export type Transaction = {
  id: number;
  status: string;
  person: string;
  amount: number;
  create_at: string;
};

export type Transactions = {
  userId: number;
  transactions: Transaction[];
};

export type RecurringBill = {
  userId: number;
  paid_bills: number;
  total_upcoming: number;
  due_soon: number;
};

export type Data = {
  userId: number;
  balance: Balance[];
  budget: Budget[];
  pots: Pot[];
  recurringBills: RecurringBill[];
  transactions: Transaction[];
};

export type ResDataType = {
  users: User[];
  data: Data[];
};
export type DataType = {
  user: User;
  data: Data;
};
