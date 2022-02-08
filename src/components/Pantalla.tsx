import React from "react";

export const Pantalla = () => {
  return (
    <>
      <div className="calc__header">
        <div className="calc__header-delete">
          <span className="calc__header-button">Delete &lArr;</span>
        </div>
        <div className="calc__input">
          <input
            type="number"
            // disabled
            className="calc__input-size calc__input-input-1"
          />
          <input
            type="number"
            // disabled
            className="calc__input-size calc__input-input-2"
          />
          <input
            type="number"
            // disabled
            className="calc__input-size calc__input-input-3"
          />
        </div>
      </div>
    </>
  );
};
