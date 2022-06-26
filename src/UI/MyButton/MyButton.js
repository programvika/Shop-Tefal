import React from 'react'
import styles from './MyButton.module.scss'

const MyButton = (props) => {
return (
    <button className={styles.btn} {...props}>
        {props.children}
    </button>
)
}

export default MyButton