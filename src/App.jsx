import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// max 9
// + / -
// %
// 0.
// ac /
// nshannery sxmeluc guyny poxvi

function App() {
  console.log("render")
  const array = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ]
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const sign = ['+', '-', 'x', '÷'];

  let [result, setResult] = useState("0")
  let [firstNum, setFirstNum] = useState("")
  let [lastNum, setLastNum] = useState("")

  const resultSize = function(e) {
    let res = e.target.textContent;
    console.log(res);
    // if(action) res = lastNum;
    // else if (!action) res = firstNum;

    if(res.length < 6){
      return "largeSize";
    }else if(res.length > 8) return "smallSize";
    else return "mediumSize";
  }

  let [action, setAction] = useState("")

  const click = function (e) {
    e.preventDefault();
    const key = e.target.textContent;
    if (digits.includes(key) && !action) {
      if (key === "." && firstNum.length === 0) {
        console.log("0.");
        setFirstNum(firstNum += "0.")
      } else if (key === "." && !firstNum.includes(".")) {
        setFirstNum(firstNum += key);
      }
      else if(key !== "."){
        setFirstNum(firstNum += key);
      }
      setResult(firstNum)
    }
    if (sign.includes(key)) {
      setAction(action = key)
    }
    if (action && digits.includes(key)) {
      setLastNum(lastNum += key);
      setResult(lastNum)
    }
    if (key === "=") {
      switch (action) {
        case "+":
          result = parseFloat(firstNum) + parseFloat(lastNum)
          break;
        case "-":
          result = parseFloat(firstNum) - parseFloat(lastNum)
          break;
        case "÷":
          result = parseFloat(firstNum) / parseFloat(lastNum)
          break;
        case "x":
          result = parseFloat(firstNum) * parseFloat(lastNum)
          break;
      }
      clearAll()
      setResult(result)
      setFirstNum(result)
    }
    if (key === "AC") {
      clearAll()
    }
    console.log(firstNum, action, lastNum, "=", result);
  }

  const clearAll = () => {
    setFirstNum("");
    setLastNum("");
    setAction("")
    setResult("0");
  }



  return (
    <div className="App">
      <div className='wrapper'>
        <div className='calc-screen'>
          <p className={resultSize({result})}>{result}</p>
        </div>
        <div className='buttons'>
          {
            array.map((row, index) => {
              return (
                <button key={uuidv4()} className={"btn btn-" + (index)} onClick={click}>{row}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
export default App;
