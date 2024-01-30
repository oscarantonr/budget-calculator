import React, { useState } from "react";
import TotalBudget from "./TotalBudget";
import BudgetList from "./BudgetList";

const Calculator = () => {
  const [budgets, setBudgets] = useState([]);
  const [newBudget, setNewBudget] = useState("");
  const [newItemText, setNewItemText] = useState("");

  const addBudget = () => {
    if (newItemText && newBudget > 0) {
      setBudgets((prevBudgets) => [
        ...prevBudgets,
        {
          text: newItemText,
          number: parseFloat(newBudget),
          id: new Date().getTime().toString(),
        },
      ]);
      setNewItemText("");
      setNewBudget("");
    }
  };

  const deleteAll = () => {
    setBudgets([]);
    setNewItemText("");
    setNewBudget("");
  };

  const handleDelete = (id) => {
    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.id !== id)
    );
  };

  const totalBudget = budgets
    .map((budget) => parseFloat(budget.number))
    .reduce((acc, val) => acc + val, 0);

  return (
    <>
      <div className="window-content">
        <div className="field-title">
          <div className="img-container">
            <img src="/images/display.png" alt="Budget" />
          </div>
          <h2>
            <TotalBudget
              total={
                totalBudget > 0 ? totalBudget.toLocaleString("es") : totalBudget
              }
            />
          </h2>
        </div>
        <div className="field-container">
          <label>New Subject</label>
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
          />
        </div>
        <div className="field-container">
          <label>New Cost</label>
          <input
            type="number"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />
        </div>
        <div className="field-button">
          <button disabled={budgets.length === 0} onClick={deleteAll}>
            Delete All
          </button>
          <button onClick={addBudget}>Add</button>
        </div>
        <BudgetList budgets={budgets} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Calculator;
