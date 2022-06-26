import React, { useState } from 'react'
import styles from './Basket.module.scss'
import {useCart} from 'react-use-cart'

    const Basket = () => {
        const {
            isEmpty,
            totalUniqueItems,
            totalItems,
            items,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart
        } = useCart()
        if (isEmpty) return <h1>Твоя корзина пуста</h1>
        return (
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.all}>Выбрано товаров: {totalItems}</div>
                    <div className={styles.table}>
                        {items.map((item, index) => {
                            return (
                                <div
                                    className={styles.card}
                                    key={index}>
                                <img src={item.img} alt="" />
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div>Количество: ({item.quantity})</div>
                                <div className={styles.btn}>
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >-</button>
                                    <button
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >+</button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                    >Удалить товар</button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div>
                        <div className={styles.totalPrice}>Сумма: {cartTotal} рублей</div>
                    </div>
                </div>
            </div>
    )
    }

export default Basket