import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <div className={styles.insideContainer}>
        <Display displayValue={calVal.toString()} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
