import React, { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../theme';
import { Head } from 'next/document';

export default function App(props) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
