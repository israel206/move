import { Input } from '../components/Input';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/icon-full.svg" alt="Letra m"/>
      </div>
      <div className={styles.loginContent}>
        <img src="/logo-full-white.svg" alt=""/>
        <h4>Bem-vindo</h4>
        <div className={styles.githubDescription}>
          <img src="/icons/git.svg" alt=""/>
          <p>Faça login com seu Github para começar</p>
        </div>
        <Input />
      </div>
    </div>
  )
}