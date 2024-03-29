import { MultipleInputData } from "models/form.model";

export enum TransactionCategory {
  Shopping = "shopping",
  Subscription = "subscription",
  Food = "food",
  Salary = "salary",
  Transportation = "transport",
  Vehicle = "vehicle"
}

export const CATEGORIES_INPUT: MultipleInputData[] = [{
  label: TransactionCategory.Shopping + "",
  value: 0
},{
  label: TransactionCategory.Subscription + "",
  value: 1
},{
  label: TransactionCategory.Food + "",
  value: 2
}]

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