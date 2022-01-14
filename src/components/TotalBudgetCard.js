import React from "react";
import { useBudget } from "../contexts/BudgetsContexts";
import BudgetCard from "./BudgetCard";

function TotalBudgetCard(props) {
  const { expenses, budgets } = useBudget();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  const max = budgets.reduce((total, budget) => total + budget.amount, 0);

  if (amount === 0) return;
  return <BudgetCard gray amount={amount} name="total" max={max} hidebuttons />;
}

export default TotalBudgetCard;
