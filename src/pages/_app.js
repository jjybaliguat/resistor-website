import { CssBaseline, ThemeProvider } from '@mui/material'
import Head from 'next/head'
import { theme } from '../../theme'

export default function App({ Component, pageProps }) {
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
      <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
