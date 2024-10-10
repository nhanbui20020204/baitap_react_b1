import React, { useState } from 'react';
import './Bai1.css';
function Bai2(props) {
    const [num, setNum] = useState(0)
    const handleOnClick = (type) => {
        // console.log(type)
        if(type === 'add'){
            setNum( num +1)
        }
        if(type === 'reset'){
            setNum(0)
        }
        if(type === 'subtract'){
            setNum( num -1)
        }
    }
    return (
        <div className="body">
          <header>
            <h1>
              <i class="fa-solid fa-hand-pointer"></i>
            </h1>
            <h1> React Clicker</h1>
          </header>
          <div className="display">{num}</div>
          <div className="button-body">
            <button className="add" onClick={() => handleOnClick("add")}>
              <i class="fa-solid fa-plus"></i>
            </button>
            <button className="reset" onClick={() => handleOnClick("reset")}>
              <i class="fa-solid fa-repeat"></i>
            </button>
            <button className="subtract" onClick={() => handleOnClick("subtract")}>
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
    );
}

export default Bai2;