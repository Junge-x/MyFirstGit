import React,{Component} from 'react';
import {Table} from 'antd';
import axios from 'axios'

import EditableTableUser from '../Table/EditableTableUser'

//无状态组件。
class User extends Component{
    constructor(props) {
        super(props);
        // this.addData=this.addData.bind(this)
        
    }
    
    render(){
        return <div>
            <EditableTableUser></EditableTableUser>
        </div>
    }
}
export default User;

