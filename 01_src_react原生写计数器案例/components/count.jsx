import React, { Component } from 'react';

export default class Count extends Component {
    state = {
        number: 0
    };
    //加
    increment = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
        //获取初始化的状态
        const number = this.state.number;
        //更新状态  value*1将其变为number类型
        this.setState({ number: number + value * 1 })

    }
    //减
    decrement = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
        //获取初始化的状态
        const number = this.state.number;
        //更新状态
        this.setState({ number: number - value * 1 })
    }
    //奇数才去加
    incrementOdd = () => {
        //获取用户选择的数字
        const value = this.refs.getValue.value;
        //获取初始化的状态
        const number = this.state.number;
        //更新状态
        if (number % 2 === 1) {
            this.setState({ number: number + value * 1 })
        }
    }
    //延迟一秒才加
    incrementAsync = () => {
        //输入函数体
        setTimeout(() => {
            //获取用户选择的数字
            const value = this.refs.getValue.value;
            //获取初始化的状态
            const number = this.state.number;
            //更新状态
            this.setState({ number: number + value * 1 })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>当前计数为：{this.state.number}</h2>
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