import React from 'react'
import styles from '../../index.scss'

const About =() => {
    return(
    
    <div className={`${styles.resume} ${styles.zone}`}>
        <div className={styles.left}>
            <h1>傅昱智</h1>
            <h4>飛泓科技 | 技術服務工程師</h4>
            <hr />
            <p>天意照炯，我自獨行，天地雖不容我，心安即是歸處</p>
            <div >
            <a className={`${styles.btn} ${styles.fill}`} href="https://github.com/nttu94507" target="_blank" >作品集</a>
            <a className={`${styles.btn} ${styles.fill}`} href="https://github.com/nttu94507" target="_blank" >Github</a>
            </div>
            <div >
            <h4>Skills</h4>
            <h2>專業技能</h2>
            <ul className={styles.listSkill}>
                <li>
                <div className={styles.circle}>
                  <div className={styles.p90}></div>
                </div>
                前端網頁開發
                </li>
                <li>
                <div className={styles.circle}>
                  <div className={styles.p90}></div>
                  <div className={styles.p180}></div>
                </div>
                網站環境建置(Linux/Windows)
                </li>
                <li>
                <div className={styles.circle}>
                  <div className={styles.p90}></div>
                  <div className={styles.p180}></div>
                  <div className={styles.p270}></div>
                </div>  
                後端網頁
                </li>
                <li>
                <div className={styles.circle}>
                <div className={styles.p360}></div>
                </div>
                網路規劃
                </li>
                <li>
                <div className={styles.circle}></div>
                網站品質測試
                </li>
                <li>
                <div className={styles.circle}></div>
                前端框架
                </li>
                <li>
                <div className={styles.circle}></div>
                程式問題修復及追蹤
                </li>
            </ul>
            <div >
                <h4>programming Skill</h4>
                <h2>程式技能</h2>
                <ul className={styles.listProgram}>
                <li>PHP
                    <div className={styles.bar}>
                    <div className={`${styles.vlaue} ${styles.p60}`}></div>
                    </div>
                </li>
                <li>python
                    <div className={styles.bar}>
                    <div className={`${styles.vlaue} ${styles.p20}`}></div>
                    </div>
                </li>
                <li>html/css/js
                    <div className={styles.bar}>
                    <div className={`${styles.vlaue} ${styles.p80}`}></div>
                    </div>
                </li>
                <li>CCNA
                    <div className={styles.bar}>
                    <div className={`${styles.vlaue} ${styles.p70}`}></div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    <div className={styles.right}>
    <div className={styles.decoration}></div>
    <div >
      <h4>Exprience /Work</h4>
      <h2>經歷與作品</h2>
      <ul className={styles.listExperience}>
      <li >2020
          <ul>
            <li>PIXIS 飛泓科技 |FAE Engineer</li>
            <li>客戶系統建置及系統故障排除</li>
          </ul> 
        </li>
        <li >2019
          <ul>
            <li>MoresTech 賜鴻科技 | RD</li> 
            <li>現有網站維護及新增功能</li>
          </ul>
        </li>
        <li >2018
          <ul>
            <li>Google 美商科高國際有限公司 intern</li>
            <li>手機功能測試</li>
          </ul>
        </li>
        <li >2017
          <ul>
            <li>HTC 宏達電子 intern</li>
            <li>手機功能測試</li>
          </ul>
        </li>
      </ul>
    </div>
    <div className={styles.hidden}>
      <h4>contests</h4>
      <h2>比賽經歷</h2>
      <ul>
        <li>HTC 宏達電子 intern</li>
        <li>手機功能測試</li>
        <li>Google 美商科高國際有限公司 intern</li>
        <li>手機功能測試</li>
        <li>MoresTech 賜鴻科技 | RD</li> 
        <li>現有網站維護及新增功能</li>
        <li>PIXIS 飛泓科技 |FAE Engineer</li>
        <li>客戶系統建置及系統故障排除</li>
      </ul>
    </div>
  </div>
    </div>




    )
        
}

export default About 