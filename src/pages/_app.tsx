
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global';
import theme from '../styles/theme'

import Navbar from '../utils/navbar'
import Footer from '../utils/footer'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <section>
          <Component {...pageProps} />
          <Footer/>
        </section>
        <GlobalStyle/>
    </ThemeProvider>
)

}

export default MyApp
