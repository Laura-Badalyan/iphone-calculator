import { useState } from "react"
import "../components/calc.css"

function Calc() {
  const [value, setValue] = useState("0")
  const [memory, setMemory] = useState("")
  const [operator, setOperator] = useState("")
  
  function calculate(e) {
    if (e.target.className !== "calc") {
      let current = e.target.value
      setValue(parseFloat(value + current))
      if (current === "C") {
        setValue("0")
      }
      if (current === "+/-") {
        setValue(+value * -1)
      }

      if (current === "+") {
        setMemory(parseInt(value))
        setValue("0")
        setOperator("+")
      }

      if (current === "-") {
        setMemory(parseInt(value))
        setValue("0")
        setOperator("-")
      }

      if (current === "×") {
        setMemory(parseInt(value))
        setValue("0")
        setOperator("×")
      }

      if (current === "÷") {
        setMemory(parseInt(value))
        setValue("0")
        setOperator("÷")
      }

      if (current === "=") {
        if (operator === "+") setValue(memory + parseFloat(value))
        else if (operator === "-") setValue(memory - parseFloat(value))
        else if (operator === "×") setValue(memory * parseFloat(value))
        else if (operator === "÷") setValue(memory / parseFloat(value))
      }
    }
  }
  return (
    <div className="wrapper">
      <input type="text" className="number-inp" value={value} readOnly />
      <div className="calc" onClick={(e) => calculate(e)}>
        <button value="C" className="elem gray-bg">{+value !== 0 ? "AC" : "C"}</button>
        <button value="+/-" className="elem gray-bg">+/-</button>
        <button value="%" className="elem gray-bg">%</button>
        <button value="÷" className="elem orange-bg">÷</button>
        <button value="7" className="elem nums">7</button>
        <button value="8" className="elem nums">8</button>
        <button value="9" className="elem nums">9</button>
        <button value="×" className="elem orange-bg">×</button>
        <button value="4" className="elem nums">4</button>
        <button value="5" className="elem nums">5</button>
        <button value="6" className="elem nums">6</button>
        <button value="-" className="elem orange-bg">-</button>
        <button value="1" className="elem nums">1</button>
        <button value="2" className="elem nums">2</button>
        <button value="3" className="elem nums">3</button>
        <button value="+" className="elem orange-bg">+</button>
        <button value="0" className="big-elem elem nums">0</button>
        <button value="." className="elem nums">.</button>
        <button value="=" className="elem orange-bg">=</button>
      </div>
    </div>
  )
}
export default Calc