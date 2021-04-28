import styles from '../styles/components/LeaderbordCard.module.css';

interface LeaderboardCardProps {
  position: number;
  imgURL: string;
  name: string;
  level: number;
  challengesCompleted: number;
  xp: number;
}

export function LeaderboardCard({ position, imgURL, name, level, challengesCompleted, xp }: LeaderboardCardProps) {
  return (
    <div className={styles.cardContainer}>
      <span>{position}</span>
      <div>        
        <div className={styles.userInfo}>
          <div>
            <img src={imgURL} alt={name} />

            <div>
              <strong>{name}</strong>
              <p>
                <img src="icons/level.svg" alt="Seta para cima" />
                Level {level}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.userNumbers}>
          <span>{challengesCompleted}</span>
          <span>completados</span>
        </div>

        <div className={styles.userNumbers}>
          <span>{xp}</span>
          <span>xp</span>
        </div>
      </div>
    </div>
  )
}