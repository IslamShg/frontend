import { useState } from 'react'
import styles from './login.module.scss'

export const LoginScreen = () => {
  const [authType, setAuthType] = useState<'signIn' | 'signUp'>('signIn')

  return (
    <div className={styles.wrapper}>
      <div className={styles.centredContent}>
        <h1 className={styles.title}>
          {authType === 'signIn' ? 'Авторизация' : 'Регистрация'}
        </h1>
        <div className={styles.formInputs}>
          <div className={styles.inputWrapper}>
            <label>Email</label>
            <input type="email" className={styles.input} />
          </div>
          <div className={styles.inputWrapper}>
            <label>Пароль</label>
            <input type="password" className={styles.input} />
          </div>
        </div>

        <button className={styles.submitBtn}>Войти</button>
        {authType === 'signIn' ? (
          <div className={styles.suggestionWrapper}>
            <span className={styles.suggestion}>У вас не аккаунта? </span>
            <button
              className={styles.suggestionBtn}
              onClick={() => setAuthType('signUp')}
            >
              Регистрация
            </button>
          </div>
        ) : (
          <div className={styles.suggestionWrapper}>
            <span className={styles.suggestion}>Уже авторизованы? </span>
            <button
              className={styles.suggestionBtn}
              onClick={() => setAuthType('signIn')}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
