import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/Sidebar.module.css';
import HomeIcon from '../../public/icons/home.svg';
import AwardIcon from '../../public/icons/award.svg';

export function Sidebar() {
  const router = useRouter();

  const links = [
    {
      href: '/',
      children: <HomeIcon />
    },
    {
      href: '/leaderbord',
      children: <AwardIcon />
    },
  ]

  return (
    <aside className={styles.container}>
      <img src="/logo.svg" alt="Três colunas azuis com a do meio maior do que as demais" />
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.href} className={router.pathname === link.href ? styles.activeLink : ''}>
              <Link href={link.href}>
                <a>{link.children}</a>
              </Link>
            </li>  
          ))}
        </ul>
      </nav>
    </aside>
  )
}