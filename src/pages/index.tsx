import Head from 'next/head';

import { CompletedChallegens } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContexts';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar/>
    
      <CountdownProvider>
        <section>
          <div> 
            <Profile/> 
            <CompletedChallegens/> 
            <Countdown/>
          </div>

          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>

    </div>
  )
}
