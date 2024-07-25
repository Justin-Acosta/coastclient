import '../styles/global.css';
import { AppWrapper } from '@/context/state.js';

export default function Coast({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
  
    return getLayout(
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    )
  }

//useState


//useEffect


//Functions


//HTML