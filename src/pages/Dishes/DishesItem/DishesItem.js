import { observer } from 'mobx-react-lite'
import React from 'react'
import styles from './DishesItem.module.scss'
import {useCart} from 'react-use-cart'
import heart from '../../../img/heart.svg'

const DishesItem = observer((props) => {
    const {addItem} = useCart();

    return (
        <div>
            <div
                className={styles.wrapper}
                key={props.dishes.id}>
                <div className={styles.table}>
                    <div className={styles.card}>
                        <div><img src={props.dishes.img} alt="aa" /></div>
                        <div className={styles.name}>{props.dishes.name}</div>
                        <div className={styles.price}>{props.dishes.price}</div>
                        <duv className={styles.btns}>
                            <button className={styles.btn_basket} onClick={() => addItem(props.dishes)}>В корзину</button>
                            <button className={styles.btn_heart} onClick={() => addItem(props.dishes)}><img src={heart} alt="" /></button>
                        </duv>
                    </div>
                </div>
            </div>
        </div>
    )
    })

export default DishesItem