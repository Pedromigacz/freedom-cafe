import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Copyright } from "../shared"

const Hr = () => (
  <HRWrapper>
    <HorizontalRuler />
    or
    <HorizontalRuler />
  </HRWrapper>
)

const Home = () => (
  <Main>
    <Header>
      <Link to="/">
        <Icon>
          <b>FC</b>
        </Icon>
      </Link>
      <Title>
        <b>Welcome to Freedom Cafe</b> a decentrilized web chat based on freedom
        & privacy.
      </Title>
    </Header>
    <Link to="/login">
      <Button>Login</Button>
    </Link>
    <Link to="/register">
      <Button>Register</Button>
    </Link>
    <Hr />
    <Link to="/chat">
      <Button>Chat as a guest</Button>
    </Link>
    <Copyright />
  </Main>
)

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
    font-size: 27px;
    display: block;
  }
`

const Button = styled.button`
  border: none;
  background: #eeeeee;
  color: #333333;
  font-size: 27px;
  font-weight: 700;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 0;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #222222;
  }
`

const HRWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #555555;
  margin: 0.5rem 0 1.5rem 0;
`

const HorizontalRuler = styled.hr`
  width: 45%;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #555555;
  margin: 0;
`

export default Home
