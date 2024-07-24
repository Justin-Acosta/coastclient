import '../styles/global.css';

export default function Coast({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
  
    return getLayout(
        <Component {...pageProps} />
    )
  }

//useState


//useEffect


//Functions


//HTML