import React, { useContext, useState, useEffect } from "react"
import { GunContext } from "../../../templates/DefaultLayout/GunContext"
import styled from "styled-components"
import Message from "./Message.jsx"
import GUN, { SEA } from "gun"

const ChatComponent = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const { user, username } = useContext(GunContext)

  const db = GUN({
    peers: [
      "https://gun-manhattan.herokuapp.com/gun",
      "http://localhost:8000/gun",
    ],
  })

  const onSubmit = async e => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    const secret = await SEA.encrypt(newMessage, "#f00")
    const message = user.get("all").set({ what: secret })
    const index = new Date().toISOString()
    db.get("devChat").get(index).put(message)
    setNewMessage("")
    setLoading(false)
  }

  useEffect(() => {
    db.get("devChat")
      .map()
      .once(async (data, id) => {
        if (data) {
          const key = "#f00"
          let message = {
            who: await db.user(data).get("alias"),
            what: (await SEA.decrypt(data.what, key)) + "",
            when: GUN.state.is(data, "what"),
          }
          if (message.what) {
            setMessages(prevMessages =>
              [...prevMessages, message].sort((a, b) => a.when - b.when)
            )
          }
        }
      })
  }, [])

  return (
    <ChatWrapper>
      <Chat>
        {messages.map((msg, key) => (
          <Message
            message={msg.what}
            author={msg.who}
            key={key}
            currentlyUser={username}
          />
        ))}
      </Chat>
      <SendMessageForm onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Type a message..."
          onChange={e => setNewMessage(e.target.value)}
          value={newMessage}
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
