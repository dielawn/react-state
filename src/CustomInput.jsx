import { useState } from "react";

export const CustomInput = () => {
    const [value, setValue] = useState('')
    console.log(value)
    return (
        <>
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            placeholder="type something"
        />
       <p>{value}</p>
        </>
    )
}