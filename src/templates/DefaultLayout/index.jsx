import * as React from "react"
import "./reset.css"
import styled from "styled-components"

const DefaultLayout = ({ children }) => (
  <ContentContainer>{children}</ContentContainer>
)

const ContentContainer = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(243.18deg, #4d194d 0%, #006466 100%);
`

export default DefaultLayout
