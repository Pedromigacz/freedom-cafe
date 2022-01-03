import React from "react"
import styled from "styled-components"

const Hr = () => (
  <HRWrapper>
    <HorizontalRuler />
    or
    <HorizontalRuler />
  </HRWrapper>
)

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

export default Hr
