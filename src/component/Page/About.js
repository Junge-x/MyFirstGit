import React,{Component} from 'react'
//无状态组件。
// const About = (props)=>{
//     console.log(props)
//     return <div>
//         <span>this is About</span>
//         <button onClick={this}>调到home</button>
//     </div> 
// }

class About extends Component{
    skipToHome(){
        this.props.history.push('/');
    }
    render(){
        return <div>
        <span>this is About</span>
        <button onClick={this.skipToHome.bind(this)}>跳到home</button>
    </div> 
    }
   
}
export default About