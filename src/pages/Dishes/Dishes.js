import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, {useEffect, useState } from 'react'
import styles from './Dishes.module.scss'
import DishesItem from './DishesItem/DishesItem'

const Dishes = observer(() => {
  const [goods, setGoods] = useState([])


  useEffect(() => {
    axios.get('https://62b85a30f4cb8d63df5c5dd2.mockapi.io/type/1/Goods')
    .then(response => {
        setGoods(response.data)
    })
    .catch((err) => console.log(err))
}, [])

  return (
    <div className={styles.wrapper}>
      {goods.map((dishes) => 
          <DishesItem key={dishes.id} dishes={dishes}/>
        )}
    </div>
  )
})

export default Dishes