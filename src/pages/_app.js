import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Head from 'next/head'
import { theme } from '../../theme'
import "../../theme/custom.css"
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(false)
  const theme2 = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  })
  return (
    <>
      <Head>
        <title>
          Resistor Website
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme2}>
              <CssBaseline />
              <Component mode={mode} setMode={setMode} {...pageProps} />
      </ThemeProvider>
    </>
  )
}
