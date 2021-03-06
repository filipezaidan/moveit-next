
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';




export function Profile(){


    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/filipezaidan.png" alt="Filipe Zaidan"/>
            <div>
                <strong>Filipe Zaidan</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}