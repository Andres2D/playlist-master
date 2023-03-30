import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode(`url('/images/bg.svg')`, `url('/images/bg-dark.svg')`)(props),
      },
    }),
  },
  fonts: {
    heading: `'Josefin-sans', sans-serif`,
    body: `'Josefin-sans', sans-serif`
  },
  colors: {
    // whiteAlpha: {
    //   500: '#FFF'
    // },
    // brand: {
    //     50: '#1C6758',
    //   500: '#42D760',
    //   600: '#26B543'
    // },
    teal: {
      50: '#2c8f8f',
      200: '#5dc3c3',
      500: '#123837',
    },
    blackAlpha: {
      50: '#2c8f8f',
      300: '#5dc3c387',
      200: '#5dc3c3',
      500: '#123837',
    },
    blackTeal: {
      200: 'gray',
      500: '#FFF',
    },
    red: {
      200: "#F56565",
      500: "#C53030",
    }
    // brand: {
    //   50: '#1C6758',
    //   500: '#4ECB71',
    //   600: '#4ECB71'
    // },
    // darks: {
    //   50: '#333',
    //   500: '#333'
    // },
    // clean: {
    //   500: '#EDF2F7'
    // }
  },
  components: {
    // Input: {
    //   variants: {
    //     filled: {
    //       field: {
    //         bg: 'white',
    //         color: 'black',
    //         borderRadius: '10',
    //         _focusVisible: {
    //           bg: 'white',
    //           color: 'black'
    //         },
    //         _focus: {
    //           borderColor: 'green.100',
    //         },
    //       },
    //     },
    //   },
    // },
  },
});

export default theme
