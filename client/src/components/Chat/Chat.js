import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from "socket.io-client";

import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'
import { ChatContainer } from './Chat.styled'

let socket

const Chat = ({ location }) => {
  const ENDPOINT = "localhost:5000";
  const [ name, setName ] = useState('')
  const [ room, setRoom ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ users, setUsers ] = useState([])
  const [ messages, setMessages ] = useState([])

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    
    socket = io(ENDPOINT)
    
    setName(name)
    setRoom(room)


    socket.emit('join',{ name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ ENDPOINT, location.search ])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([ ...messages, message ])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    }, [ messages ])
    
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  })

  const sendMessage = (e) => {
    e.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <ChatContainer>
      <Sidebar name={name} room={room} users={users} />
      <Main name={name} messages={messages} sendMessage={sendMessage} setMessage={setMessage} message={message}/>
    {/* {name} + {room}
    <ul>
      {messages.map(message => <li>{message.message} - {message.user}</li>)}
    </ul>

    <input value={message} onChange={(e) => {e.preventDefault(); setMessage(e.target.value)}}/>
    <button type="submit" onClick={() => sendMessage(message)}>Send Message</button> */}
    </ChatContainer>
  )
}

export default Chat