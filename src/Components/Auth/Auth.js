import React from 'react'
import styles from './Auth.module.scss'

    const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal}>
                <div className={styles.auth_loyalty}>
                    <div className={styles.auth}>
                        <button>Вход</button>
                        <button>Регистрация</button>
                        <div><p>Создать личный кабинет Tefal</p></div>
                        <div>
                            <p>Имя</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Фамилия</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Телефон</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Адрес электронной почты</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input></input>
                        </div>
                        <div className={styles.checkbox}>
                            <input type='checkbox'></input>
                            <p>Завершая регистрацию, я даю свое согласие на обработку персональных данных</p>
                        </div>
                        <button>Зарегистрироваться</button>
                    </div>
                    <div className={styles.loyalty}>
                        <div><p>Преимущества программы лояльности</p></div>
                        <div>
                            <div>+500 бонусных баллов при регистрации</div>
                            <div>До 7% кешбэк за покупки при регистрации</div>
                            <div>+250 бонусных баллов за отзыв или опрос</div>
                            <div>Баллы на день рождение и другие предложения</div>
                            <div>Закрытые предложения</div>
                        </div>
                        <a>узнайте про все преимущества</a>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Auth