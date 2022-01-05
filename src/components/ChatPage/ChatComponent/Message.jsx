import React from "react"
import styled from "styled-components"

const Message = ({ message, author = "guest", currentlyUser }) => (
  <MessageLine self={author === currentlyUser}>
    <Icon>{author[0] + author[1]}</Icon>
    <MessageWrapper>{message}</MessageWrapper>
  </MessageLine>
)

const MessageLine = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: ${props => (props.self ? "row-reverse" : "row")};
`

const Icon = styled.div`
  display: inline-grid;
  place-items: center;
  width: 35px;
  height: 35px;
  background: linear-gradient(225deg, #4d194d 0%, #006466 100%);
  border-radius: 50%;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0.5rem;
`

const MessageWrapper = styled.div`
  padding: 8px;
  display: inline-block;
  color: #333333;
  font-size: 1rem;
  background: #c4c4c4;
  max-width: calc(100% - 70px);
  word-wrap: break-word;
`

export default Message
