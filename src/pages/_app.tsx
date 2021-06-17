// import App from 'next/app'
import "gutenberg-css/dist/gutenberg.css";
import "gutenberg-css/dist/themes/modern.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <style global jsx>{`
        @media screen {
          html {
            background: gray !important;
          }

          body {
            width: 21cm;
            margin-top: 3cm;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23) !important;
          }
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
