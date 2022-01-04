import React, { useContext, useState } from "react"
import { GunContext } from "../../../templates/DefaultLayout/GunContext"
import styled from "styled-components"
import Message from "./Message.jsx"

const ChatComponent = () => {
  const { sendMessage, messages } = useContext(GunContext)
  const [message, setMessage] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    sendMessage(message).then(e => {
      console.log("sent")
    })
  }

  return (
    <ChatWrapper>
      <Chat>
        {messages.map((msg, key) => (
          <Message message={msg.what} author={msg.who} key={key} />
        ))}
      </Chat>
      <SendMessageForm onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Type a message..."
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <SendButton type="submit">Send</SendButton>
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

const SendMessageForm = styled.form`
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
  cursor: pointer;
`

// chat

const Chat = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  overflow: auto;
  max-height: calc(100vh - 450px);
`

export default ChatComponent
