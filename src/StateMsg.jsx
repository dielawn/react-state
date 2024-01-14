import { useState } from "react";

export const ResponseMsg = () => {
    const [text, setText] = useState('')
    const [status, setStatus] = useState('typing')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        await sendMessage(text)
        setStatus('sent')
    } 
    const isSending = status === 'sending'
    const isSent = status === 'sent'

    if (isSent) {
        return <h1>Thanks for your feedback!</h1>
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}>
            </textarea>
            <br></br>
            <button disabled={isSending} type="submit">Send</button>
            {isSending && <p>Sending...</p>}
        </form>
    )
}
const sendMessage = (text) => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
}