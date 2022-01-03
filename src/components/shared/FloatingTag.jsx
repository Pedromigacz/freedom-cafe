import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const FloatingTag = ({ label, value, onChange, type }) => {
  const [focus, setFocus] = useState(false)
  return (
    <InputWrapper>
      <Label
        initial={{ y: 20, x: 5 }}
        animate={{ y: value || focus ? 20 : 40, x: value || focus ? 5 : 15 }}
      >
        {label}
      </Label>
      <Input
        type={type || "text"}
        onFocus={e => setFocus(true)}
        onBlur={e => setFocus(false)}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.span`
  width: 100%;
  display: inline-block;
  color: #333333;
`

const Label = styled(motion.label)`
  display: block;
  font-weight: 600;
  pointer-events: none;
`

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  background: #eeeeee;
  color: inherit;
  font-size: 18px;
  padding: 1rem;
  font-weight: 600;
`

export default FloatingTag
