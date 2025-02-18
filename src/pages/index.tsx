import Head from 'next/head';
import {GetServerSideProps} from 'next';
import { CompletedChallegens } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContexts';
import { ChaellengesProvider } from '../contexts/ChallengesContexts';

interface HomeProps {
  level: number;
  currentExperience: number; 
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChaellengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
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
    </ChaellengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}