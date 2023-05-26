import { ProductsFeed } from '../../components/ProductsFeed/ProductsFeed'

import styles from './home.module.scss'

export const HomeScreen = () => {
  return (
    <div className={styles.root}>
      <p className={styles.resultCount}>
        Найдено <span>10 000</span> продуктов
      </p>
      <ProductsFeed />
    </div>
  )
}
