import React, { useEffect, useState } from "react"
import "../templates/DefaultLayout/reset.css"
import styled from "styled-components"
import GunContextProvider from "../templates/DefaultLayout/GunContext"

const DefaultLayout = ({ Component, pageProps }) => (
  <ContentContainer>
    <GunContextProvider>
      <Component {...pageProps} />
    </GunContextProvider>
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
