import * as React from "react"
import "./reset.css"
import styled from "styled-components"
import GunContextProvider from "./GunContext"

const DefaultLayout = ({ children }) => (
  <ContentContainer>
    <GunContextProvider>{children}</GunContextProvider>
  </ContentContainer>
)

const ContentContainer = styled.div`
  display: inline-grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(243.18deg, #4d194d 0%, #006466 100%);
`

export default DefaultLayout
