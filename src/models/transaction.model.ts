export enum TransactionCategory {
  Shopping = "shopping",
  Subscription = "subscription",
  Food = "food"
}

export enum TransactionType {
  Out = 0,
  In = 1
}

export interface Transaction {
  category: TransactionCategory,
  description: string;
  amount: number;
  date: Date;
  type: TransactionType
}