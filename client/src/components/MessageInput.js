import React, { useState } from 'react'
import { socket } from '../service/socket'


export default function MessageInput() {
    const [input, setInput] = useState("")
    // const [messageInfo, setMessageInfo] = useState({
    //     name: '',
    //     color: '',
    //     message: ''
    // })

    const sendMessage = (e) => {
        e.preventDefault()

        if (input) {
            socket.emit("chat message", input)
            setInput("")
        }
    }

    const handleInput = (e) => {
        setInput(e.target.value)

    }
    

    return (
        <div>
            <form className='message-box' onSubmit={sendMessage}>
                <input onChange={handleInput} type='text' />
                <button>Send</button>
            </form>
        </div>
    )
}
