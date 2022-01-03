import React from "react"
import styled from "styled-components"

const Copyright = () => (
  <CopyrightText>
    Copyright © 2022{" "}
    <a href="https://pedromigacz.com" target="_blank" rel="noreferrer">
      PedroMigacz
    </a>
  </CopyrightText>
)

const CopyrightText = styled.span`
  margin-top: auto;
  display: block;
  text-align: center;

  & a {
    font-weight: 400;
    text-decoration: underline;
  }
`

export default Copyright
