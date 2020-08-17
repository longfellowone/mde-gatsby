import React from "react"
import { Link } from "gatsby"

import "../css/index.css"

const IndexPage = () => {
  console.log("hello")

  return (
    <>
      <h1 className="bg-green-500">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
