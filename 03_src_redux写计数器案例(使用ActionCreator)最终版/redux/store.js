/* 
store.js文件是redux中最为核心的文件---store
*/
//引入一个createStore,用于创建一个store对象
import {createStore} from 'redux';
//引入reducer，用于操作状态，reducer命名自定义，一般用驼峰命名法
import countReducer from './count_reducer';

//调用createStore,调用时，必须传入一个reducer：用来操作状态，把store对外暴露，count.jsx才能通过store获取到状态
export default createStore(countReducer);//这儿传入的reducer就是上便引入命名为countReducer