import Head from 'next/head' 
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


export const GlobalStyle = createGlobalStyle`
  * 
  {
  font-family: 'Plus Jakarta Sans Variable', sans-serif;
    font-weight: normal;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    
  }
  body {
  background-color:white;
  overflow:hidden;

  }
`

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
        <Head>
          <title>Ahmad's Website</title>
          <meta name='description' content='Put a description here about your app'/>
          <meta name='robots' content='index, follow'/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon_package/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <GlobalStyle />

      <StateContext>
      <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </StateContext>
    </>
  )
}


