
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallegens(){
    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallegensContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>

        </div>
    );
}