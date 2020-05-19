import React, { useState,useEffect }  from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';

 
const Counter = () =>{
    const [count, setCount] = useState(0)
    useEffect(() => {
        return () => {
            console.log('cpmponent 移除後')
        }
    },[])
    return (
        <>
            <h1 className={Styles.main}>{count}</h1>
            <button type="button"onClick={()=>{setCount(count + 1)}} >點我</button>
        </>
    )
} 

const Main = () =>{
    const[hiddenCounter, setHiddenCounter] = useState(false)
    return (
        <>
            <button type="button" onClick={() => {
                setHiddenCounter(!hiddenCounter);}}>
                關閉計數器
            </button>
            {hiddenCounter ? null:<Counter />}
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