import React from "react";

const BudgetItem = ({ budget, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(budget.id);
  };

  return (
    <div className="budget-item">
      <div className="field-container">
        <div className="field-container">
          <label className="budget-item-label">
            <b>Subject: </b>
          </label>
          <input type="text" disabled value={budget.text} />
        </div>
        <div className="field-container">
          <label className="budget-item-label">
            <b>Cost: </b>
          </label>
          <input type="number" disabled value={budget.number} />
        </div>
      </div>
      <div className="field-button">
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default BudgetItem;
