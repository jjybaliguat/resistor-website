import { store } from '@/lib/store'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import typography from '../../theme/typography'
import { useSelector } from 'react-redux'

let persistor = persistStore(store)

const LayoutThemeProvider = (props) => {
    const mode = useSelector(store=>store.homepage?.darkTheme)
    const { Component, pageProps: {session, ...pageProps}, emotionCache } = props
    const getLayout = Component.getLayout ?? ((page) => page);

    const theme2 = createTheme({
        palette: {
          mode: mode ? "dark" : "light",
          primary: {
            main: '#03a9f4',
          },
          secondary: {
            main: '#4db6ac',
          },
          },
          typography: {
            button: {
              fontWeight: 600
            },
            fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
            body1: {
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.5
            },
            body2: {
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.57
            },
            subtitle1: {
              fontSize: '1rem',
              fontWeight: 500,
              lineHeight: 1.75
            },
            subtitle2: {
              fontSize: '0.875rem',
              fontWeight: 500,
              lineHeight: 1.57
            },
            overline: {
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              lineHeight: 2.5,
              textTransform: 'uppercase'
            },
            caption: {
              fontSize: '0.75rem',
              fontWeight: 400,
              lineHeight: 1.66
            },
            h1: {
              fontWeight: 700,
              fontSize: '3.5rem',
              lineHeight: 1.375
            },
            h2: {
              fontWeight: 700,
              fontSize: '3rem',
              lineHeight: 1.375
            },
            h3: {
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.375
            },
            h4: {
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.375
            },
            h5: {
              fontWeight: 600,
              fontSize: '1.5rem',
              lineHeight: 1.375
            },
            h6: {
              fontWeight: 600,
              fontSize: '1.125rem',
              lineHeight: 1.375
            }
          },
          typography,
      })

  return (
    <PersistGate persistor={persistor}>
        <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme2}>
            <Head>
              <title>
                Resistor Website
              </title>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
                    <CssBaseline /> 
                    {
                          getLayout(<>
                                <Component {...pageProps}/>
                            </>)
                        }
          </ThemeProvider>  
          </CacheProvider>
    </PersistGate>
  )
}

export default LayoutThemeProvider
