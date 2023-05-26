import Link from 'next/link'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
import { AuthorizationModal } from '../AuthorizationModal'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { HeaderDropdownMenu } from '../HeaderDropdownMenu'

const LINKS = [
  { title: 'Каталог', href: '/' },
  { title: 'Корзина', href: '/basket' },
  { title: 'Избранное', href: '/favorites' }
]

export const Header = () => {
  const userRole = 'client'
  const isAuth = true
  const [authModalOpened, setAuthModalOpened] = useState(false)
  const { asPath } = useRouter()

  return (
    <header className={styles.header}>
      {authModalOpened && (
        <>
          <div
            onClick={() => setAuthModalOpened(false)}
            className={styles.overflow}
          />
          <AuthorizationModal onClose={() => setAuthModalOpened(false)} />
        </>
      )}
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <p className={styles.title}>Фермер.ру</p>
          <nav className={styles.headerLinks}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className={classNames(styles.link, {
                    [styles.activeLink]: link.href === asPath
                  })}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </nav>
        </div>
        <div className={styles.contentRight}>
          {isAuth ? (
            <HeaderDropdownMenu />
          ) : (
            <button
              className={styles.signIn}
              onClick={() => {
                setAuthModalOpened(true)
              }}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
