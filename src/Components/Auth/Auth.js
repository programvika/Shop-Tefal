import React, { useContext, useState } from 'react'
import styles from './Auth.module.scss'
import { useDispatch } from 'react-redux'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {useLocation, useNavigate} from 'react-router-dom'
import { ADMIN_PANEL_ROUTE, FAVORITES_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { auth } from '../../firebase';
import { AuthContext } from '../../store/AuthContext/AuthContext';
import MyButton from '../../UI/MyButton/MyButton';

    const Auth = ({active, setActive, children}) => {
        const {dispatch} = useContext(AuthContext);
        const [login, setLogin] = useState(true)
        const [registr, setRegistr] = useState(false)
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState(false)
        const {currentUser} = useContext(AuthContext)
        const nav = useNavigate()

        const loginClick = () => {
            setLogin(true)
            setRegistr(false)
        }

        const registrClick = () => {
            setRegistr(true)
            setLogin(false)
        }

        const handleLogin = (e) => {
            e.preventDefault()
            signInWithEmailAndPassword (auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch({type:'LOGIN', payload:user})
                    setActive(false)
                })
                .catch(() => {
                    setError(true)
                });
        }

        const handleReg = (e) => {
            e.preventDefault()
            createUserWithEmailAndPassword (auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch({type:'LOGIN', payload:user})
                    setActive(false)
                })
                .catch(() => {
                    setError(true)
                });
        }

    
        const logOut = () => {
            dispatch({type:'LOGOUT'})
            nav(SHOP_ROUTE)
        }

        const AdminGo = () => {
            nav(ADMIN_PANEL_ROUTE)
            setActive(false)
        }

    return (
        <div
            onClick={() => setActive(false)} className={`${styles.wrapperAuth} ${active ? styles.activeAuth : ''}`}>
            <div onClick={e => e.stopPropagation()} className={styles.modalAuth}>
                <div className={styles.auth}>
                    {currentUser ?
                        <div>
                            <MyButton onClick={() => logOut()}>Выйти</MyButton>
                            <MyButton onClick={() => AdminGo()}>Админ панель</MyButton>
                        </div>
                    :
                        <div>
                            <div className={styles.btns}>
                                <button onClick={loginClick} className={`${styles.login} ${login ? styles.active : ''}`}>Вход</button>
                                <button onClick={registrClick} className={`${styles.registr} ${registr ? styles.active : ''}`}>Регистрация</button>
                            </div>
                            {registr ?
                            <form
                                onSubmit={handleReg}
                                className={styles.reg}>
                                    <div className={styles.title}><p>Создать личный кабинет Tefal</p></div>
                                    <div className={styles.inputs}>
                                        <div>
                                            <p>Адрес электронной почты</p>
                                            <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                type='email'
                                                value={email}
                                                placeholder='Почта..'/> 
                                        </div>
                                        <div>
                                            <p>Пароль</p>
                                            <input
                                                onChange={(e) => setPassword(e.target.value)}
                                                type='password'
                                                value={password}
                                                placeholder='Пароль..'/>
                                        </div>  
                                    </div>
                                    <button>Зарегистрироваться</button>
                            </form>
                            :
                            <form
                                onSubmit={handleLogin}
                                className={styles.log}>
                                <div className={styles.title}>Войти в личный кабинет Tefal</div>
                                <div className={styles.data}>
                                    <div>
                                        <p>Email</p>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type='email'
                                            value={email}
                                            placeholder='email..'/>
                                    </div>
                                    <div>
                                        <p>Пароль</p>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            type='password'
                                            value={password}
                                            placeholder='password..'/>
                                    </div>
                                    <button>Войти</button>
                                </div>
                            </form>
                    }
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
    }

export default Auth