import { useState } from "react";
import style from "./IncrementDecrement.module.css";

function IncrementDecrement() {
  let result = 0
  function handleDecrementButton() { //exemplo de função que não da certo no react
    result--
  }
  // estado - state
  const [count, setCount] = useState(0);

  // function handleDecrementcount() {
  //   setCount(count - 1)
  // }
  // function handleincrementcount() {
  //   setCount(count + 1)
  // }

  return (
    <div className={style.container}>
      <h2>Incrementing and Decrementing a number </h2>
      <div className={style.counter}>
        <span>Usando variável</span>
        <button onClick={handleDecrementButton}>
          <span> - </span>
        </button>

        <span className={style.value}>{result}</span>

        <button onClick={handleDecrementButton}>
          <span> + </span>
        </button>
      </div>

      <hr />
      {/*  pode fazer direto  39 e 44 ou pode chamar as funções 12 e 16 */}
      <div className={style.counter}>
        <span>Usando estado</span>
        <button onClick={() => setCount(count - 1)}>
          <span> - </span>
        </button>

        <span className={style.value}>{count}</span>

        <button onClick={() => setCount(count + 1)}>
          <span> + </span>
        </button>
      </div>
    </div>
  );
}

export default IncrementDecrement;