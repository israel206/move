import Head from 'next/head';
import { LeaderboardCard } from '../components/LeaderboardCard';
import { LeaderboardHeader } from '../components/LeaderboardHeader';
import { Sidebar } from '../components/Sidebar';
import styles from '../styles/pages/Leaderboard.module.css';

import users from '../../users.json';

export default function Leaderboard() {
  return (
    <>
      <Sidebar />
      
      <div className={styles.container}>
        <Head>
          <title>Leaderboard | move.it</title>
        </Head>

        <h1>Leaderboard</h1>

        <LeaderboardHeader />

        {users.map((user, index) => (
          <LeaderboardCard
            key={user.github}
            position={index + 1}
            imgURL={user.github}
            name={user.name}
            level={user.level}
            challengesCompleted={user.challengesCompleted}
            xp={user.xp}
          />
        ))}
      </div>
    </>
  )
}