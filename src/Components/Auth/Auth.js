import React, { useState } from 'react'
import styles from './Auth.module.scss'

    const Auth = ({active, setActive, children}) => {
        const [login, setLogin] = useState(true)
        const [registr, setRegistr] = useState(false)

        const loginClick = () => {
            setLogin(true)
            setRegistr(false)
        }

        const registrClick = () => {
            setRegistr(true)
            setLogin(false)
        }

    return (
        <div onClick={() => setActive(false)} className={`${styles.wrapperAuth} ${active ? styles.activeAuth : ''}`}>
            <div onClick={e => e.stopPropagation()} className={styles.modalAuth}>
                <div className={styles.auth}>
                    <div className={styles.btns}>
                        <button onClick={() => loginClick()} className={`${styles.login} ${login ? styles.active : ''}`}>Вход</button>
                        <button onClick={() => registrClick()} className={`${styles.registr} ${registr ? styles.active : ''}`}>Регистрация</button>
                    </div>
                    {registr ?
                        <div className={styles.reg}>
                            <div className={styles.title}><p>Создать личный кабинет Tefal</p></div>
                            <div className={styles.inputs}>
                                <div>
                                    <p>Имя</p>
                                    <input placeholder='Имя..'/>
                                </div>
                                <div>
                                    <p>Фамилия</p>
                                    <input placeholder='Фамилия..'/>
                                </div>
                                <div>
                                    <p>Телефон</p>
                                    <input placeholder='Телефон..'/>
                                </div>
                                <div>
                                    <p>Адрес электронной почты</p>
                                    <input placeholder='Почта..'/> 
                                </div>
                                <div>
                                    <p>Пароль</p>
                                    <input placeholder='Пароль..'/>
                                </div>
                            </div>
                            <button>Зарегистрироваться</button>
                        </div>
                        :
                        <div className={styles.log}>
                            <div className={styles.title}>Войти в личный кабинет Tefal</div>
                            <div className={styles.data}>
                                <div>
                                    <p>Email</p>
                                    <input placeholder='email..'/>
                                </div>
                                <div>
                                    <p>Пароль</p>
                                    <input placeholder='password..'/>
                                </div>
                                <button>Войти</button>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
    }

export default Auth