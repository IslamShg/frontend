import { IProduct } from '../../global/interface.global'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductsFeed.module.scss'

export const PRODUCTS_MOCK: IProduct[] = [
  {
    name: 'Творог',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4330/4a790d-270x270.JPG?v=3'
  },
  {
    name: 'Молоко',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4341/8e3a74-270x270.JPG?v=3'
  },
  {
    name: 'Сметана',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4334/5b8e76-270x270.JPG?v=3'
  },
  {
    name: 'Ряженка',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4339/f91177-270x270.JPG?v=3'
  },
  {
    name: 'Клубника',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/1755/d40239-270x270.jpg?v=3 '
  },
  {
    name: 'Перец',
    authorName: 'Илья Калашников',
    imgUrl:
      'https://cdn.esh-derevenskoe.ru/image/cache/catalog/product/4747/66dd0c-270x270.JPG?v=3 '
  }
]

export const ProductsFeed = () => {
  return (
    <div className={styles.list}>
      {PRODUCTS_MOCK.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  )
}
