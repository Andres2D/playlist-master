import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import theme from '../styles/theme.conf';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}
