import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  progressPercent: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}
//criando interface para childrem
interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
//VARIAVEL GLOBAL
let countdownTimeout: NodeJS.Timeout;
//contagem 0.1
const initialTime = 25 * 60;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);
  
  const [time, setTime] = useState(initialTime);
  const [progressTimer, setProgressTimer] = useState(0);
  //variavel boolean
  const [isActive, setIsActive] = useState(false);
  //finalizaçaõ do time
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const progressPercent = (progressTimer / initialTime) * 100;
  //Função de inicialização
  function startCountdown() {
    setIsActive(true);
  }
  //Função de resetar
  function resetCountdown() {
    //Parando sem ultrapassa
    clearTimeout(countdownTimeout);

    //parar, mais passa um seconds
    setIsActive(false);
    //retornando ciclo, zera
    setTime(initialTime);
    setProgressTimer(0)
    //finalizando ciclo
    setHasFinished(false);
  }
  // FUNÇÃO DE EFEITO contagem
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
        setProgressTimer(progressTimer + 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, progressTimer]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      progressPercent,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}