import styles from './productScreen.module.scss'

const product = {
  name: 'Творог',
  authorName: 'Илья Калашников',
  price: '350 р',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae libero, non modi facilis harum laudantium praesentium sint. Rerum rem eius laboriosam explicabo eveniet dolore. Necessitatibus sequi, minus velit blanditiis voluptas laborum harum tenetur doloribus eum dolor nobis quo expedita quod eligendi quisquam? Ex alias perferendis fugit hic maxime quae!',
  imgUrl:
    'https://img.vkusvill.ru/pim/images/site_BigWebP/5e9ee970-9211-44e8-a09e-bae73f37fed0.webp?1669225454.5639'
}

export const ProductScreen = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentLeft}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.price}>{product.price}</p>
        <button className={styles.basketBtn}>В корзину</button>
        <div className={styles.descBlock}>
          <h5 className={styles.descTitle}>Описание</h5>
          <p className={styles.desc}>{product.description}</p>
        </div>
      </div>
      <div className={styles.contentRight}>
        <img src={product.imgUrl} alt="" />
      </div>
    </div>
  )
}
