import React, { Component } from 'react';
//引入 store.js，因为需要在count.js文件中调用store中的dispatch()方法和getState()方法。
//因为之后可能有很多组件都需要用到store这个文件，所以直接在index.js中引入即可。
// import store from '../redux/store';
import {INCREMENT,DECREMENT} from '../redux/count_type'

export default class Count extends Component {
    
    //加
    increment = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
        
        //更新状态  value*1将其变为number类型
        this.props.store.dispatch({type:INCREMENT,data:value*1})
        

    }
    //减
    decrement = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
       
        //更新状态
        this.props.store.dispatch({type:DECREMENT,data:value*1})
    }
    //奇数才去加
    incrementOdd = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
        //获取更新之前状态
        const number = this.props.store.getState();
        //更新状态
        if(number%2===1){
            this.props.store.dispatch({type:DECREMENT,data:value*1})
        }
    }
    //延迟一秒才加
    incrementAsync = () => {
        //输入函数体
        setTimeout(() => {
            //获取用户选择的数字
            const value = this.refs.getValue.value;
            //更新状态
            this.props.store.dispatch({type:INCREMENT,data:value*1})
            
        }, 1000);
    }
   
    render() {
        return (
            <div>
                <h2>当前计数为：{this.props.store.getState()}</h2>
                <select ref='getValue'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>奇数才去加</button>&nbsp;
				<button onClick={this.incrementAsync}>延迟一秒加</button>
            </div>
        )
    }
}