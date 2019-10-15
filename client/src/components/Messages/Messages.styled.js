import styled from 'styled-components'
import ScrollToBottom from 'react-scroll-to-bottom'

export const MessagesContainer = styled(ScrollToBottom)`
  height: 90%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
`

export const UserIcon = styled.div`
  margin-left: 1rem;
  margin-bottom: .5rem;
  max-width: 50%;
`

export const MessageContainer = styled.div`
  max-width: 80%;
  flex-wrap: wrap;
`

export const MyMessageBox = styled(MessageBox)`
  align-items: flex-end;
`

export const Message = styled.div`
  // max-width: 80%;
  display: inline-block;
  background: #f3f3f3;
  padding: 1rem;
  border-radius: 10px;
  letter-spacing: 1px;
  font-size: 1.2rem;
`

export const MyMessage = styled(Message)`
  background: #2979FF;
  color: #fff;
`

export const NewUser = styled(Message)`
  background: #000;
  color: #fff;
`
