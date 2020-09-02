import { ThemeProvider } from "theme-ui"
import Layout from "./Layout"
import Theme from "./Theme"
import config from "../../blog.config"
import ReactGA from "react-ga"

import React from "react"
import { MDXEmbedProvider } from "mdx-embed"

const Wrapper = (props) => {
  if (typeof config.analytics === "string" && config.analytics !== "") {
    ReactGA.initialize(config.analytics)
    ReactGA.set({ anonymizeIp: true })
    if (typeof window !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <MDXEmbedProvider>
        <Layout {...props} />
      </MDXEmbedProvider>
    </ThemeProvider>
  )
}

export default Wrapper
