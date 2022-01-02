import React from "react"
import DefaultLayout from "./src/templates/DefaultLayout"
export const wrapRootElement = ({ element }) => (
  <DefaultLayout>{element}</DefaultLayout>
)
