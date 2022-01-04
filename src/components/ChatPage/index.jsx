import React, { useContext } from "react"
import { GunContext } from "../../templates/DefaultLayout/GunContext"
import styled from "styled-components"
import { Copyright } from "../shared"
import ChatComponent from "./ChatComponent"

const ChatPage = () => {
  const { username } = useContext(GunContext)

  return (
    <Main>
      <Header>
        <Icon>
          <b>{username[0] + username[1]}</b>
        </Icon>
        <Title>
          Logged as <b>"{username}"</b>
        </Title>
      </Header>
      <ChatComponent />
      <Copyright />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 50vw;
  min-height: 80vh;
  background: #333333;
  padding: 1rem;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: auto;
`

const Icon = styled.div`
  display: inline-grid;
  place-items: center;
  width: 100px;
  height: 100px;
  background: linear-gradient(225deg, #4d194d 0%, #006466 100%);
  border-radius: 50%;

  & b {
    font-weight: 600;
    font-size: 43px;
    text-transform: uppercase;
    transform: translate(8px, 8px);
  }
`

const Title = styled.h1`
  display: inline-block;
  font-size: 24px;
  width: calc(100% - 100px);
  margin: 0 0 0 20px;
  font-weight: 400;

  & b {
    font-weight: 600;
  }
`

export default ChatPage
