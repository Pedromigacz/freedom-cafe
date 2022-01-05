import React, { useState, useContext } from "react"
import { GunContext } from "../../templates/DefaultLayout/GunContext"
import { Copyright, FloatingTag } from "../shared"
import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const { signup } = useContext(GunContext)

  const register = e => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    signup(form.name, form.password)
      .then(() => {
        setLoading(false)
        router.push("/chat")
      })
      .catch(e => {
        console.log(e)
        setError(e)
        setLoading(false)
      })
  }

  return (
    <Main>
      <Header>
        <Link href="/">
          <a>
            <Icon>
              <b>FC</b>
            </Icon>
          </a>
        </Link>
        <Title>Registration Page</Title>
      </Header>
      <Form onSubmit={register}>
        <FloatingTag
          label="Name:"
          value={form.name}
          onChange={e => {
            setForm(prev => ({ ...prev, name: e.target.value }))
          }}
        />
        <FloatingTag
          type="password"
          label="Password:"
          value={form.password}
          onChange={e => {
            setForm(prev => ({ ...prev, password: e.target.value }))
          }}
        />
        <Disclaimer>
          *Be aware that there's currently no way to recover any lost accounts.
        </Disclaimer>
        {error && <Error>{error}</Error>}
        <Button>{loading ? "Loading..." : "Register"}</Button>
      </Form>
      <Copyright />
    </Main>
  )
}

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

const Form = styled.form`
  display: inline-block;
  width: 100%;
`

const Disclaimer = styled.span`
  display: block;
  margin: 3rem 0 0.5rem 0;
`

const Error = styled.span`
  color: #ff1223;
`

const Button = styled.button`
  border: none;
  background: #eeeeee;
  color: #333333;
  font-size: 27px;
  font-weight: 700;
  border-radius: 3px;
  width: 100%;
  padding: 1rem 0;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #222222;
  }
`

export default RegisterPage
