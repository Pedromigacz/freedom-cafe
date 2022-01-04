import React, { useState, createContext, useEffect } from "react"
import GUN from "gun"
import "gun/sea"
// import "gun/axe"

const SEA = GUN.SEA

export const GunContext = createContext()

const GunContextProvider = props => {
  const [username, setUsername] = useState("")
  const [messages, setMessages] = useState([])

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

  useEffect(() => {
    gun
      .get("chat")
      .map()
      .once(async (data, id) => {
        if (data) {
          let message = {
            who: await gun.user(data).get("alias"),
            what: await SEA.decrypt(data.what, "#foo"),
            when: GUN.state.is(data, "what"),
          }

          if (message.what) {
            setMessages(prev =>
              [...prev.slice(-20), message].sort((a, b) => a.when - b.when)
            )
          }
        }
      })
  }, [])

  const sendMessage = async newMessage => {
    const secret = await SEA.encrypt(newMessage, "#foo")

    const message = user.get("all").set({ what: secret })

    const index = new Date().toISOString()

    gun.get("chat").get(index).put(message)
    return
  }

  const login = (username, password) => {
    const promise = new Promise((resolve, reject) => {
      user.auth(username, password, ({ err }) => {
        if (err) {
          reject(err)
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
        sendMessage,
        messages,
      }}
    >
      {props.children}
    </GunContext.Provider>
  )
}

export default GunContextProvider
