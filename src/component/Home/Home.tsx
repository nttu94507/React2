import React from 'react'
import styles from '../Home/Home.scss'


const Home = () =>{
    return(
        <div className={styles.home}>
            <div className={styles.section}>
                <div className={styles.photo}>
                    <a href="https://shopee.tw/">
                        <img  src={"https://i.imgur.com/2bAaTgy.jpeg"}  alt="shopy"/>
                    </a>
                </div>
                <div className={styles.photo}>
                    <h1>電商型網站</h1>
                    <p>電子商務
電商平台的重點莫過於如何呈現商品及銷售方式，此模板架構主要為電商設計產品介紹、產品展示、FQA、使用條款、退換貨政策等頁面，並且提供完整的線上銷售系統包括購物車的建立、物流的連結以及結帳流程等</p>
                    {/* <img  src={"https://i.imgur.com/2bAaTgy.jpeg"}  alt="shopy"/> */}
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.photo}>
                        <a href="http://www.pixis.com.tw/">
                            <img  src={"https://i.imgur.com/ZCh9ZW0.jpg"}  alt="shopy"/>
                        </a>
                    </div>
                    <div className={styles.photo}>
                        <h1>公司形象官網</h1>
                        <p>帕帕設計豐富你的前途
網站架設、程式維護、漏洞修復等服務項目</p>

<p>也能客製化-官網的樣子由你決定，讓帕帕設計完成你夢想中的藍圖</p>
                        {/* <img  src={"https://i.imgur.com/2bAaTgy.jpeg"}  alt="shopy"/> */}
                </div>
            </div>


        </div>
    )
}
export default Home