import { createContext, ReactNode, useContext, useEffect, useState} from "react";
import { ChallengesContext } from "./ChallengesContexts";


interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFineshed: boolean;
    isActive: boolean;
    startCountdowm: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps{
    children: ReactNode;
}


export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps){
    const {startNewChallenge} = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFineshed, setHasFineshed] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdowm(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFineshed(false);
    }

    useEffect( () => {
        if(isActive && time> 0 ){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if ( isActive && time === 0){
            setHasFineshed(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);




    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFineshed,
            isActive,
            startCountdowm,
            resetCountdown,

        }}>
            {children}
        </CountdownContext.Provider>
    );
}