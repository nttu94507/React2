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
            <div className="buttons">
            <a className="btn fill" href="https://github.com/nttu94507" target="_blank" >作品集</a>
            <a className="btn" href="https://github.com/nttu94507" target="_blank" >Github</a>
            </div>
            <div className="block">
            <h4>Skills</h4>
            <h2>專業技能</h2>
            <ul className="listSkill">
                <li>
                <div className="circle"></div>
                前端網頁開發(html/css/js)
                </li>
                <li>
                <div className="circle"></div>
                網站環境建置(Linux/Windows)
                </li>
                <li>
                <div className="circle"></div>
                後端網頁(Laravel)
                </li>
                <li>
                <div className="circle"></div>
                網路規劃(CCNA)
                </li>
                <li>
                <div className="circle"></div>
                網站品質測試(QA)
                </li>
                <li>
                <div className="circle"></div>
                前端框架(React.js)
                </li>
                <li>
                <div className="circle"></div>
                程式問題修復及追蹤
                </li>
            </ul>
            <div className="block">
                <h4>programming Skill</h4>
                <h2>程式技能</h2>
                <ul className="listProgram">
                <li>PHP
                    <div className="bar">
                    <div className="vlaue"></div>
                    </div>
                </li>
                <li>python
                    <div className="bar">
                    <div className="vlaue"></div>
                    </div>
                </li>
                <li>html/css/js
                    <div className="bar">
                    <div className="vlaue"></div>
                    </div>
                </li>
                <li>CCNA
                    <div className="bar">
                    <div className="vlaue"></div>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>

        <div className={styles.right}>
    <div className="decoration"></div>
    <div className="block">
      <h4>Exprience /Work</h4>
      <h2>經歷與作品</h2>
      <ul>
        <li className="year">2017
          <ul>
            <li>HTC 宏達電子 intern</li>
            <li>手機功能測試</li>
          </ul>
        </li>
        <li className="year">2018
          <ul>
            <li>Google 美商科高國際有限公司 intern</li>
            <li>手機功能測試</li>
          </ul>
        </li>
        <li className="year">2019
          <ul>
            <li>MoresTech 賜鴻科技 | RD</li> 
            <li>現有網站維護及新增功能</li>
          </ul>
        </li>
        <li className="year">2020
          <ul>
            <li>PIXIS 飛泓科技 |FAE Engineer</li>
            <li>客戶系統建置及系統故障排除</li>
          </ul> 
        </li>
      </ul>
    </div>
    <div className="block hidden">
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