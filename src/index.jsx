import React, { useState,useEffect }  from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';
import PropTypes from 'prop-types';

 
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
    
    return (
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
            {names.map(name=>(
                <div
                    key={name}
                    classname={isEmpty(name) ? '' : Styles.Main}    
                >
                    {`Hello ${isEmpty(name) ? 'World' : name}!`} 
                </div>
            ))}
        </div>
    )
};
HelloWorld.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string),
  };

  HelloWorld.defaultProps = {
    names: ['Default string'],
  };


ReactDom.render(<HelloWorld names={[1,2,3]}/> , document.getElementById('root'));