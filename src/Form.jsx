import { useState } from "react";

export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)    
    }
    const handleReset = () => {
        setFirstName('')
        setLastName('')
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={changeFirstName}
            ></input>
            <input
                placeholder="Last name"
                value={lastName}
                onChange={changeLastName}
            ></input>
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}