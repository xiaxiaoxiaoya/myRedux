import React,{Component} from 'react';
import Count from './components/count';

export default class App extends Component{
  render(){
    return (
      //在App.js中接收index.js给的store属性,传给Count组件即:count.jsx,在count.js中调用store的dispatch()方法
      <Count store={this.props.store}/>
    )
  }
}
