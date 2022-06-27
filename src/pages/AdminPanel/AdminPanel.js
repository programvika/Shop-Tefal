import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../Components/Modal/Modal'
import MyButton from '../../UI/MyButton/MyButton'
import styles from './AdminPanel.module.scss'
import axios from 'axios'
import {storage} from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const AdminPanel = observer(() => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActive1, setModalActive1] = useState(false)
    const [value, setValue] = useState('')
    const [nav, setNav] = useState('')
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')
    const [types, setTypes] = useState([])
    const {device} = useContext(Context)
    
    const addType = async () => {
        await axios.post('https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type' , {
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

    const addGoods = async () => {
        await axios.post(`https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type/${device.select}/Goods` , {
            name: name,
            price: price,
            type: types,
            img: data.img
        })
        .then(response => {
            console.log(response)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setModalActive1(false)
        })
    }

    useEffect(() => {
        const getTypes = async() => {
            await axios.get('https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type')
            .then(response => {
                setTypes(response.data)
            })
            .catch((err) => console.log(err))
        }
        getTypes()
    }, [])

useEffect(() => {
    const uploadFile = () => {
        const storageRef = ref(storage, img.name);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
        "state_changed",
        (snapshot) => {
            switch (snapshot.state) {
            case "paused":
                console.log("Upload is paused");
                break;
            case "running":
                console.log("Upload is running");
                break;
            default:
                break;
            }
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            });
        }
        );
    };
    img && uploadFile();
    }, [img]);
    
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
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Название товара...'/>
                <select value={device.select} onChange={(e) => device.setSelect(e.target.value)}>
                    <option disabled value="">Выбрать тип</option>
                    {types.map(option =>
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    )}
                </select>
                <input
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder='Цена...'/>
                <input
                    onChange={e => setImg(e.target.files[0])}
                    id='file'
                    type="file" />
                <MyButton onClick={() => addGoods()}>Добавить товар</MyButton>
            </div>
        </Modal>
    </div>
)
})

export default AdminPanel