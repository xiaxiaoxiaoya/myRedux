
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'


ReactDOM.render(<App store={store}/>,document.getElementById('root'));

//因为getState()方法，redux状态改变，不会实时刷新，因此在调用store.subcribe()方法进行重新渲染App组件
store.subscribe(()=>{
  //输入函数体
  ReactDOM.render(<App store={store}/>,document.getElementById('root'));
})
