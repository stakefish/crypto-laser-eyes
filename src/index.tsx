import React from "react"
import ReactDOM from "react-dom"
import Helmet from "react-helmet"
import Konva from "konva"

import { SCALE_FACTOR } from "./helpers/const"

import App from "./core/App"

Konva.pixelRatio = SCALE_FACTOR

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
