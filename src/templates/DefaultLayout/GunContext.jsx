import React, { useState, createContext } from "react"
import GUN from "gun"
import "gun/sea"
import "gun/axe"

export const GunContext = createContext()

const GunContextProvider = props => {
  const [username, setUsername] = useState("")

  // DATABASE
  const gun = GUN()

  // GUN USER
  const user = gun.user().recall({ sessionStorage: true })

  // current user username
  user.get("alias").on(v => setUsername(v))

  gun.on("auth", async event => {
    const alias = await user.get("alias") //username string
    setUsername(alias)

    console.log(`signed in as ${alias}`)
  })

  const login = (username, password) => {
    const promise = new Promise((resolve, reject) => {
      user.auth(username, password, ({ err }) => {
        if (err) {
          // alert(err)
          reject()
        } else {
          resolve()
        }
      })
    })
    return promise
  }

  const signup = (username, password) => {
    const promise = new Promise((resolve, reject) => {
      user.create(username, password, ({ err }) => {
        if (err) {
          throw err
        } else {
          user.auth(username, password, ({ err }) => {
            if (err) throw err
          })
          resolve()
        }
      })
    })
    return promise
  }

  const logout = () => {
    user.leave()
    setUsername("")
  }

  // const deleteAccount = (setUsername) => {
  //   user.delete("alias")
  //   setUsername("")
  // }

  return (
    <GunContext.Provider
      value={{
        username,
        user,
        login,
        signup,
        logout,
      }}
    >
      {props.children}
    </GunContext.Provider>
  )
}

export default GunContextProvider
