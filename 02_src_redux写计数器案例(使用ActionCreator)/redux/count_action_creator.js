//该文件用来创建action对象
import {INCREMENT,DECREMENT} from './count_type';

//形参用于接收用户选择的数字，且是一个数字型,在count.jsx中引入createIncrementAction,createDecrementAction两个函数
export const createIncrementAction = (value)=>({type:INCREMENT,data:value});//创建加法action对象
export const createDecrementAction = (value)=>({type:DECREMENT,data:value});//创建减法action对象
