import React from "react";
import { useState } from 'react'

export const NumberBuilder = () => {
    let [numbers, setNumbers]= useState("")
    let [counter, setCounter]= useState(0)

    const onHandleClick = () => {
        setCounter(++counter)
        setNumbers(numbers += (counter + " "))
    }

    const onHandleReset = () => {
        setCounter(0)
        setNumbers("")
    }

    return (
        <div>
            <button onClick={() => onHandleClick()}>Add Number</button>
            <button onClick={() => onHandleReset()}>Reset</button>
            <br></br>
            Numbers:  {numbers}
            </div>
    )
    }