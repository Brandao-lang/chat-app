import React, { useState } from 'react'
import { socket } from '../service/socket'

export default function MessageDisplay() {
    const [messages, setMessages] = useState([])

    socket.on('chat message', (msg) => {
        const copy = [...messages]
        copy.push(msg)
        setMessages(copy)
    })

    const display = messages.map((chatMessage, index) => {
        return (
            <li key={index}>
                {chatMessage}
            </li>
        )
    })

    return (
        <div className='message-display'>
            <ul>
                {display}
            </ul>
        </div>
    )
}
