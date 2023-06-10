import {React, useEffect} from 'react'
import "../theme/custom.css"
import { useState } from 'react'
import { Provider } from 'react-redux'
import { createEmotionCache } from '@/utils/create-emotion-cache'
import { persistStore } from 'redux-persist'
import LayoutThemeProvider from '@/components/helpers/provider'
import { store } from '@/lib/store'

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps: {session, ...pageProps} } = props;

  return (
    <>
    <Provider store={store}>
      <LayoutThemeProvider Component={Component} pageProps={pageProps} emotionCache={emotionCache} />
    </Provider>
    </>
  )
}

export default App
