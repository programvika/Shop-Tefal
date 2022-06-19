import React, { useContext, useState } from 'react'
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
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import close from '../../img/close.png'
import DeviceHeader from '../../Components/DeviceHeader/DeviceHeader'


const Header = observer(() => {
    const [modalActive, setModalActive] = useState(false)
    const {device} = useContext(Context)

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.catalog}>
                        <button onClick={() => setModalActive(true)}>
                            {modalActive ? <img className={styles.close} src={close} alt="" /> : <img src={catalog} alt="catalog" />}
                            <p>Каталог</p>
                        </button>
                        <input></input>
                    </div>
                    <div className={styles.phone}>
                        <p>8 (800) 600-27-59</p>
                        <p>с 9:00 до 21:00</p>
                    </div>
                </div>
                <div className={styles.center}>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.center__logo}>
                        <img src={phone} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        <img src={search} alt="search" />
                        <p>Поиск</p>
                    </div>
                    <div className={styles.entrance}>
                        <img src={entrance} alt="entrance" />
                        <p>Войти</p>
                    </div>
                    <div className={styles.compare}>
                        <img src={compare} alt="compare" />
                        <p>Сравнить</p>
                    </div>
                    <div className={styles.favorites}>
                        <img src={favorites} alt="favorites" />
                        <p>Избранное</p>
                    </div>
                    <div className={styles.basket}>
                        <img src={basket} alt="basket" />
                    </div>
                </div>
            </div>
            <Modal className={styles.modal} active={modalActive} setActive={setModalActive}>
                {device.types.map(device => 
                        <div
                            className={styles.device}
                            key={device.id}>
                                <div className={styles.types}>{device.name}</div>
                        </div>
                    )}
            </Modal>
            <DeviceHeader/>
            <Modal/>
        </div>
    )
})

export default Header