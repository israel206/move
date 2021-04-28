import { useRouter } from 'next/router';
import styles from '../styles/components/Input.module.css';

export function Input() {
  const router = useRouter();

  function handleLogin() {
    router.push('/');
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Digite seu username" required />
      <button type="button" onClick={handleLogin}>
        <img src="/icons/arrow-right.svg" alt="Seta para o lado direito"/>
      </button>
    </div>
  )
}