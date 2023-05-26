import { FC } from 'react'
import { IProduct } from '../../global/interface.global'
import styles from './ProductCard.module.scss'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const ProductCard: FC<IProduct> = ({ name, authorName, imgUrl }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <button className={styles.favoriteBtn}>
          <FavoriteBorderIcon />
        </button>
        <img className={styles.cardImg} src={imgUrl} alt="" />
        <div className={styles.cardContent}>
          <Link
            target={'_blank'}
            href={'/products/12312'}
            className={styles.name}
          >
            {name}
          </Link>
          <p className={styles.authorName}>{authorName}</p>
          <p className={styles.price}>350 р</p>
          <div className={styles.reviewStars}></div>
          <button
            onClick={(e) => {
              e.stopPropagation()
            }}
            className={styles.baskBtn}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}
