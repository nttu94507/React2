import React from 'react';
import ReactDom from 'react-dom';
import Styles from './index.css';

const Main = () => <h1 className={Styles.main}>Hi JSX！</h1>;

ReactDom.render(<Main />, document.getElementById('root'));