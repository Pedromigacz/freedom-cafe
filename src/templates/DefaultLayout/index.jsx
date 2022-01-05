import React, { useEffect, useState } from "react"
import "./reset.css"
import styled from "styled-components"
import GunContextProvider from "./GunContext"

const DefaultLayout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return loading ? (
    <div>Loading</div>
  ) : (
    <ContentContainer>
      <GunContextProvider>{children}</GunContextProvider>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  display: inline-grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(243.18deg, #4d194d 0%, #006466 100%);
`

export default DefaultLayout
