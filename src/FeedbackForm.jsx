import { useState } from "react";

export const FeedbackForm = () => {
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState('')
    return (
        isSent ? <h1>Thank you!</h1> : <form onSubmit={e => {
            e.preventDefault()
            alert(`Sending: ${message}`)
            setIsSent(true)
        }}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)} 
            />
            <br></br>
            <button type="submit">Send</button>
        </form>
    )
}