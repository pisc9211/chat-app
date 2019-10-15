import React from 'react'

import Messages from '../Messages/Messages'
import { MainContainer, Input } from './Main.styled'

const Main = ({ name, messages, sendMessage, message, setMessage }) => {
  return (
    <MainContainer>
      <Messages messages={messages} name={name} />
      <Input 
        placeholder='Write your message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
      />
    </MainContainer>
  )
}

export default Main