import React, { useState }  from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';


const Main = () =>{
    const [count, setCount] = useState(0)
    return (
        <>
            <h1 className={Styles.main}>{count}</h1>
            <button type="button"onClick={()=>{setCount(count + 1)}} >點我</button>
        </>
    )
} 
    
const HelloWorld = (props) => {
    const { names } = props;
    const isEmpty = value => value === ''
    return names.map(name=>(
        <div
            key={name}
            className={
                `${Styles.mainBackground} 
                ${isEmpty(name) ? '' : (Styles.main)}`
            }
            style={{
                'font-size': 28,
            }}
            >
               {`Hello ${isEmpty(name) ? 'World' : name}!`} 
            </div>
    ))
}


ReactDom.render(<Main/> , document.getElementById('root'));