import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import styles from './Dishes.module.scss'
import DishesItem from './DishesItem/DishesItem'

const Dishes = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className={styles.wrapper}>
      {device.dishes.map((dishes, index) => 
          <DishesItem key={index} dishes={dishes}/>
        )}
    </div>
  )
})

export default Dishes