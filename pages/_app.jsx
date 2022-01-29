// import { ThemeProvider } from 'styled-components';

const GlobalStyle = () => (
  <style global jsx>
    {`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}
  </style>
);

// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// };

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    {/* <ThemeProvider theme={theme}> */}
    <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
);

export default App;
