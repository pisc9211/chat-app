import React from 'react'

import { MessagesContainer, MyMessageBox, MessageBox, UserIcon, MessageContainer, MyMessage, Message, NewUser } from './Messages.styled'

import ReactEmoji from 'react-emoji'

const Messages = ({ messages, name }) => {
  return (
    <MessagesContainer>
      {messages.map(message => (
        name === message.user ? 
        <MyMessageBox>
          <UserIcon>Me</UserIcon>
          <MessageContainer>
            <MyMessage>{ReactEmoji.emojify(message.message)}</MyMessage>
          </MessageContainer>
        </MyMessageBox>
        :
        <MessageBox>
          {message.user ? (
            <>
              <UserIcon>{message.user}</UserIcon>
              <MessageContainer>
                <Message>{ReactEmoji.emojify(message.message)}</Message>
              </MessageContainer>
            </>
          ) : (
            <MessageContainer>
              <NewUser>{ReactEmoji.emojify(message.message)}</NewUser>
            </MessageContainer>
          )}
        </MessageBox>
      ))}
    </MessagesContainer>
  );
}

export default Messages