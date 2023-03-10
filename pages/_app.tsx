import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { SessionProvider } from "next-auth/react"
import theme from '../styles/theme.conf';
import ContentWrapper from '../components/layout/content-wrapper';
import store from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </Provider>
      </SessionProvider>
    </ChakraProvider>
  )
}

