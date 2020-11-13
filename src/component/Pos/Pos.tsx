import React from 'react'
import styles from '../../index.scss'


const Pos = () =>{
    return(
        
        <div className={styles.scene}>    
            <div className={styles.person}>
                <div className={styles.hairs}>
                    <div className={styles.hair1}></div>
                    <div className={styles.hair2}></div>
                    <div className={styles.hair3}></div>
                </div>
                <div className={styles.body}>
                    <div className={styles.eyes}>
                        <div className={styles.eye}>
                            <div className={styles.eyeball}></div>
                        </div>
                        <div className={styles.eye}>
                            <div className={styles.eyeball}></div>
                        </div>
                    </div>
                    <div className={styles.mouth}>
                        <div className={styles.food}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pos