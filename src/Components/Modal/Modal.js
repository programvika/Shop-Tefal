import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({active, setActive, children}) => {
    return (
        <div onClick={() => setActive(false)} className={`${styles.wrapper} ${active ? styles.active : ''}`}>
            <div onClick={e => e.stopPropagation()} className={styles.modal}>
                {children}
            </div>
        </div>
    )
}

export default Modal