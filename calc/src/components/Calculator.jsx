import React, { useState } from 'react'

const Calculator = () => {
    const [input,setInput]=useState("")
    const [result,setResult]=useState("")

    const handleInput=(value)=>{
        setInput(prev=>prev+value)
    }
    const calculateResult=()=>{
        try{
            setResult(eval(input))
        }
        catch{
            setResult("Error")
        }
    }
    const clearInput=()=>{
        setInput("")
        setResult("")
    }
    const deleteLast=()=>{
        setInput(input.slice(0,-1))
    }
    return (
        <div className='calculator'>
            <div>
                <h6>Input</h6>
                <input type="text" placeholder='0' value={input} readOnly/>
                <h6>Result</h6>
                <input type="text" placeholder='0' readOnly value={result}/>
            </div>
            <div className='buttons'>
                <button onClick={clearInput}>AC</button>
                <button onClick={deleteLast}>DEL</button>
                <button onClick={() => {handleInput("-")}}>-</button>
                <button onClick={() => {handleInput("+") }}>+</button>

                <button onClick={() => {handleInput("7") }}>7</button>
                <button onClick={() => {handleInput("8") }}>8</button>
                <button onClick={() => {handleInput("9") }}>9</button>
                <button onClick={() => {handleInput("/") }}>/</button>

                <button onClick={() => {handleInput("6") }}>6</button>
                <button onClick={() => {handleInput("5") }}>5</button>
                <button onClick={() => {handleInput("4") }}>4</button>
                <button onClick={() => {handleInput("X") }}>X</button>

                <button onClick={() => {handleInput("1") }}>1</button>
                <button onClick={() => {handleInput("2") }}>2</button>
                <button onClick={() => {handleInput("3") }}>3</button>
                <button onClick={() => {handleInput(".") }}>.</button>
                <button onClick={()=>{handleInput("0")}}>0</button>


                <button onClick={calculateResult} style={{gridColumn:"span 3"}}>=</button>
            </div>
        </div>
    )
}

export default Calculator