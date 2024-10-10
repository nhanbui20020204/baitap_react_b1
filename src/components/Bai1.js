import React from "react";

function Bai1(props) {
  return (
    <div className="body">
      <header>
        <h1>
          <i class="fa-solid fa-hand-pointer"></i>
        </h1>
        <h1> React Clicker</h1>
      </header>
      <div className="display">0</div>
      <div className="button-body">
        <button className="add">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button className="reset">
          <i class="fa-solid fa-repeat"></i>
        </button>
        <button className="subtract">
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
}

export default Bai1;
