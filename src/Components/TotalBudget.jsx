import React from "react";

const TotalBudget = ({ total }) => {
  return (
    <>
      {total === 0 ? (
        <b>Create Your Budget</b>
      ) : (
        <b>
          Total Budget: {total}
          <div className="line"></div>
        </b>
      )}
    </>
  );
};

export default TotalBudget;
