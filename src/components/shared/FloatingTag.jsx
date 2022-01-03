import React, { useState } from "react"
import styled from "styled-components"

const FloatingTag = ({ label }) => {
  const [focus, setFocus] = useState(false)
  return (
    <InputWrapper>
      <LabelWrapper>{label}</LabelWrapper>
      <Input type="text" />
    </InputWrapper>
  )
}

// const [labelFocused, setLabelFocused] = useState(false)
// return (
//     <span className={styles.inputContainer + ' ' + styles.formRow}>
//         <motion.label
//             initial={{ y: 32 }}
//             animate={{ y: (form[inputKey] || labelFocused) ? 10 : 32 }}
//         >{label}</motion.label>
//         <input
//             onFocus={e => setLabelFocused(true)}
//             onBlur={e => setLabelFocused(false)}
//             type="text"
//             name={inputKey}
//             onChange={handleChange}
//             value={form[inputKey]}
//         />
//     </span>
// );

const InputWrapper = styled.span`
  width: 100%;
  display: inline-block;
  color: #333333;
`

const LabelWrapper = styled.label`
  display: block;
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
