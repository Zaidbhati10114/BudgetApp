import React from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudget,
} from "../contexts/BudgetsContexts";
import BudgetCard from "./BudgetCard";

function UncategorizedBudgetCard(props) {
  const { getBudgetExpense } = useBudget();
  const amount = getBudgetExpense(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );

  if (amount === 0) return;
  return <BudgetCard gray amount={amount} name="uncategorized" {...props} />;
}

export default UncategorizedBudgetCard;
