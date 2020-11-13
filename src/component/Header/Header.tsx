import React from 'react'
import styles from '../Header/Header.scss'
import { Switch, Route ,Link} from 'react-router-dom'


const Header = () =>{
    return(
        <div className={`${styles.header}`}>
            <ul className={`${styles.header} ${styles.ul}`}>    
            <Link to="/" data-testid="homeLink" ><li className={styles.flex1}>首頁</li></Link>
            <Link to="/todolist" data-testid="todolistLink"><li className={styles.flex1}>產品</li></Link>
            <Link to="/about" data-testid="aboutLink" ><li className={styles.flex1}>關於</li></Link>
            </ul>
        </div>

    )
}
export default Header