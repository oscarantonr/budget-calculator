import React from "react";
import BudgetItem from "./BudgetItem";

const BudgetList = ({ budgets, onDelete }) => {
  return (
    <>
      {budgets.length !== 0 ? (
        <>
          <fieldset>
            <legend>Budget List</legend>
            <div className="list">
              {budgets.map((budget) => (
                <BudgetItem
                  key={budget.id}
                  budget={budget}
                  onTotal={budget.number}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </fieldset>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BudgetList;
