/* 
    1、该文件是是reducer,而且是为count组件服务的reducer.
    2、reducer是需要接收参数的(之前状态，actioon对象{type,data}),且返回一个新的状态。
    3、此例：type:加或减？data：加多少 ？减多少 
*/
//引入常量文件
import {INCREMENT,DECREMENT} from './count_type';

//因为sotre.js文件需要引入这个reducer,因此需要对外暴露，class名可以省略
//传入默认形参，下边就不需要再进行if语句判断初始化状态
export default function (previosState = 0,action){

    //从action中获取：type,data
    const {type,data} = action;

    //0、初始化状态：但是reducer在加工状态之前，它之前得先有状态，因此，在加工之前如果没有传过来之前的previosState,
    //需要添加个判断，若有走判断case，如果没有，就走default（在传参的时候，传入默认形参）
    // if(!previosState){
    //     previosState = 0;//让初始化状态为0
    // }

    //1、提前准备好一个新的状态,作为更新后的状态
    let newState;

    //2、用switch判断type,是加还是减
    switch (type) {
        case INCREMENT:
            newState = previosState + data;//相加
            return newState;//返回新状态
        case DECREMENT:
            newState = previosState - data;//相减
            return newState;//返回新状态
        default:
            return previosState;
    }

}