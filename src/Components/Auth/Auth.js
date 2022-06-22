import React, { useState } from 'react'
import styles from './Auth.module.scss'
import { useDispatch } from 'react-redux'
import {setUser} from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

    const Auth = ({active, setActive, children}) => {
        const dispatch = useDispatch();
        const [login, setLogin] = useState(true)
        const [registr, setRegistr] = useState(false)
        const [email, setEmail] = useState('')
        const [pass, setPass] = useState('')
        const navigate = useNavigate()

        const loginClick = () => {
            setLogin(true)
            setRegistr(false)
        }

        const registrClick = () => {
            setRegistr(true)
            setLogin(false)
        }

        const handleLogin = (email, password) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    console.log(user);
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }));
                    navigate('/shop');
                })
                .catch(() => alert('Invalid user!'))
        }

        const handleRegister = (email, password) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    console.log(user);
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }));
                    navigate('/shop');
                })
                .catch(console.error)
        }



    return (
        <div
            onClick={() => setActive(false)} className={`${styles.wrapperAuth} ${active ? styles.activeAuth : ''}`}>
            <div onClick={e => e.stopPropagation()} className={styles.modalAuth}>
                <div className={styles.auth}>
                    <div className={styles.btns}>
                        <button onClick={loginClick} className={`${styles.login} ${login ? styles.active : ''}`}>Вход</button>
                        <button onClick={registrClick} className={`${styles.registr} ${registr ? styles.active : ''}`}>Регистрация</button>
                    </div>
                    {registr ?
                        <form
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
                                            onChange={(e) => setPass(e.target.value)}
                                            type='password'
                                            value={pass}
                                            placeholder='Пароль..'/>
                                    </div>  
                                </div>
                                <button onClick={() => handleRegister(email, pass)}>Зарегистрироваться</button>
                        </form>
                        :
                        <form className={styles.log}>
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
                                        onChange={(e) => setPass(e.target.value)}
                                        type='password'
                                        value={pass}
                                        placeholder='password..'/>
                                </div>
                                <button onClick={() => handleLogin(email, pass)}>Войти</button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
    }

export default Auth