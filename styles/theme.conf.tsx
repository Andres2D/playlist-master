import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        lineHeight: 'tall',
        bg: 'teal',
        color: '#FFF'
      },
    },
  },
  fonts: {
    heading: `'Josefin-sans', sans-serif`,
    body: `'Josefin-sans', sans-serif`
  },
  colors: {
    whiteAlpha: {
      500: '#FFF'
    },
    brand: {
      500: '#42D760',
      600: '#26B543'
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
