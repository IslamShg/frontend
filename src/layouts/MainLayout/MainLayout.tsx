import { FC } from 'react'
import { Header } from '../../components/Header/Header'
import styles from './MainLayout.module.scss'

export type TProps = {
  children: React.ReactNode
}

export const MainLayout: FC<TProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
