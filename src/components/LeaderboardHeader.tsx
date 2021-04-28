import styles from '../styles/components/LeaderboardHeader.module.css';

export function LeaderboardHeader() {
  return (
    <div className={styles.container}>
      <span>POSIÇÃO</span>
      <span>USUÁRIO</span>
      <span>DESAFIOS</span>
      <span>EXPERIÊNCIA</span>
    </div>
  )
}