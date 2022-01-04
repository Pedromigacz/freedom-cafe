import React, { useState } from "react"
import styled from "styled-components"
import Message from "./Message.jsx"

const ChatComponent = () => {
  const [chat, setChat] = useState([])

  return (
    <ChatWrapper>
      <Chat>
        <Message message="Some text" author="XJP" />
      </Chat>
      <SendMessageForm>
        <Input type="text" placeholder="Type a message..." />
        <SendButton>Send</SendButton>
      </SendMessageForm>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background: #eeeeee;
  flex-grow: 1;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`

const SendMessageForm = styled.div`
  width: 100%;
  display: flex;
  height: 90px;
`

const Input = styled.textarea`
  border: none;
  background: #c4c4c4;
  flex-grow: 1;
  color: #333333;
  padding: 6px;
  overflow: hidden;
  outline: none;
  margin: 0;
`

const SendButton = styled.button`
  background: #aaaaaa;
  color: #333333;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 2rem;
`

// chat

const Chat = styled.div`
  display: inline-block;
  width: 100%;
  flex-grow: 1;
`

export default ChatComponent