import React from 'react'
import styles from './DeviceHeader.module.scss'
import x_plorer from '../../img/x-plorer-new.png'
import optigrill from '../../img/optigrill-new.png'
import ingenio from '../../img/ingenio_new.png'
import ixeo_power from '../../img/ixeo-new.png'
import X_Ô from '../../img/xo-new.png'
import {ReactComponent as Percent} from '../../img/percent-svgrepo-com.svg'


    const DeviceHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.device}>
                <div className={styles.x__plorer}>
                    <div><p>X-PLORER</p></div>
                    <div><img className={styles.img_carousel} src={x_plorer} alt="x_plorer" /></div>
                </div>
                <div className={styles.x__plorer}>
                    <div><p>X-Ô</p></div>
                    <div><img className={`${styles.img_carousel} ${styles.xo}`} src={X_Ô} alt="X-Ô" /></div>
                </div>
                <div className={styles.x__plorer}>
                    <div><p>ixeo power</p></div>
                    <div><img className={`${styles.img_carousel} ${styles.ixeo}`} src={ixeo_power} alt="ixeo power" /></div>
                </div>
                <div className={styles.x__plorer}>
                    <div><p>Ingenio</p></div>
                    <div><img className={`${styles.img_carousel} ${styles.ingenio}`} src={ingenio} alt="Ingenio" /></div>
                </div>
                <div className={styles.x__plorer}>
                    <div><p>Optigrill</p></div>
                    <div><img className={`${styles.img_carousel} ${styles.optigrill}`} src={optigrill} alt="optigrill" /></div>
                </div>
                <div className={`${styles.x__plorer} ${styles.percent}`}>
                    <div><p>Акции</p></div>
                    <div><Percent className={styles.percent_svg}  alt="percent" /></div>
                </div>
            </div>
        </div>
    )
    }

export default DeviceHeader