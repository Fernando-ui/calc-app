import React from "react";

export const Pantalla = () => {
  return (
    <>
      <div className="calc__screen">
        <div className="calc__screen-header">
          <span className="calc__screen-delete">Delete &lArr;</span>
        </div>
        <div className="calc__screen-input">
          <input type="number" className="calc__screen-input input-1" />
          <input type="number" className="calc__screen-input input-2" />
          <input type="number" className="calc__screen-input input-3" />
          {/* // TODO Agregar al input 3 un before con un = para que no estorbe */}
        </div>
      </div>
    </>
  );
};
  