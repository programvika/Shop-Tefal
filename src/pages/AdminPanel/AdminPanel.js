import React, { useState } from 'react'
import Modal from '../../Components/Modal/Modal'
import MyButton from '../../UI/MyButton/MyButton'
import styles from './AdminPanel.module.scss'
import axios from 'axios'

const AdminPanel = () => {
    const [modalActive, setModalActive] = useState(true)
    const [modalActive1, setModalActive1] = useState(false)
    const [value, setValue] = useState('')
    const [nav, setNav] = useState('')
    
    const addType = async () => {
        return await axios.post('https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type' , {
            name: value,
            nav: nav
        })
        .then(response => {
            console.log(response)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setModalActive(false)
        })
    }
return (
    <div className={styles.wrapper}>
        <MyButton onClick={() => setModalActive(true)}>Добавить тип</MyButton>
        <MyButton onClick={() => setModalActive1(true)}>Добавить товар</MyButton>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.type}>
                <p>Введите тип товара и адрес на его страницу</p>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Тип...'/>
                <input
                    value={nav}
                    onChange={e => setNav(e.target.value)}
                    placeholder='Адрес...'/>
                <MyButton onClick={() => addType()}>Добавить тип</MyButton>
            </div>
        </Modal>
        <Modal className={styles.modal} active={modalActive1} setActive={setModalActive1}>
            <div className={styles.type}>
                <p>Заполните карточку товара</p>
                <input placeholder='Название товара...'/>
                <input placeholder='Тип...'/>
                <input placeholder='Тип...'/>
                <MyButton>Добавить товар</MyButton>
            </div>
        </Modal>
    </div>
)
}

export default AdminPanel