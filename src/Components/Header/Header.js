import React, { useContext, useEffect, useState } from 'react'
import logo from '../../img/logo.svg'
import search from '../../img/search.png'
import entrance from '../../img/go.png'
import compare from '../../img/compare.png'
import favorites from '../../img/hearst.png'
import basket from '../../img/basket.png'
import catalog from '../../img/catalog.png'
import styles from './Header.module.scss'
import Modal from '../../Components/Modal/Modal'
import phone from '../../img/phone.svg'
import close from '../../img/close.png'
import Auth from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'
import { BASKET_ROUTE, FAVORITES_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { AuthContext } from '../../store/AuthContext/AuthContext'
import logOutImg from '../../img/log-out.svg'
import axios from 'axios'


const Header = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveAuth, setModalActiveAuth] = useState(false)
    const nav = useNavigate()
    const {currentUser} = useContext(AuthContext)
    const [type, setType] = useState([])

    useEffect(() => {
        const getTypes = async() => {
            await axios.get('https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type')
            .then(response => {
                setType(response.data)
            })
            .catch((err) => console.log(err))
        }
        getTypes()
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.catalog}>
                        <button onClick={() => setModalActive(true)}>
                            {modalActive ? <img className={styles.close} src={close} alt="" /> : <img src={catalog} alt="catalog" />}
                            <p>Каталог</p>
                        </button>
                        <input placeholder='search..'/>
                    </div>
                    <div className={styles.phone}>
                        <p>8 (800) 600-27-59</p>
                        <p>с 9:00 до 21:00</p>
                    </div>
                </div>
                <div className={styles.center}>
                    <button onClick={() => nav(SHOP_ROUTE)}>
                        <img src={logo} alt="logo" />
                    </button>
                    <div className={styles.center__logo}>
                        <img src={phone} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        <img src={search} alt="search" />
                        <p>Поиск</p>
                    </div>
                    {currentUser ?
                        <button onClick={() => setModalActiveAuth(true)} className={styles.entrance}>
                            <img src={logOutImg} alt="entrance" />
                            <p>Админ панель</p>
                        </button>
                    :
                        <button onClick={() => setModalActiveAuth(true)} className={styles.entrance}>
                            <img src={entrance} alt="entrance" />
                            <p>Войти</p>
                        </button>
                    }
                    <div className={styles.compare}>
                        <img src={compare} alt="compare" />
                        <p>Сравнить</p>
                    </div>
                    <button
                        onClick={() => nav(FAVORITES_ROUTE)}
                        className={styles.favorites}>
                            <img src={favorites} alt="favorites" />
                            <p>Избранное</p>
                    </button>
                    <div
                        onClick={() => nav(BASKET_ROUTE)}
                        className={styles.basket}>
                        <img src={basket} alt="basket" />
                    </div>
                </div>
            </div>
            <Modal className={styles.modal} active={modalActive} setActive={setModalActive}>
                
                {type.map(device => 
                        <div
                            className={styles.device}
                            key={device.id}
                            onClick={() => setModalActive(false)}
                            >
                                <div className={styles.types} onClick={() => nav(device.nav)}>{device.name}</div>
                        </div>
                    )}
            </Modal>
            <Auth className={styles.modalAuth} active={modalActiveAuth} setActive={setModalActiveAuth}/>
        </div>
    )
}

export default Header