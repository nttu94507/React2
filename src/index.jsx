import React from 'react';
import ReactDom from 'react-dom';
import Styles from './index.scss';


    
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


ReactDom.render(<HelloWorld names={['World', 'Air','', 'Sun','Water']}/>, document.getElementById('root'));