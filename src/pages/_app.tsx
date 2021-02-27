import '../styles/global.css'


import { ChaellengesProvider} from '../contexts/ChallengesContexts';

function MyApp({ Component, pageProps }) {

  return (
    <ChaellengesProvider>
      <Component {...pageProps} />
    </ChaellengesProvider>
  )
}

export default MyApp
