import React,{Component} from 'react';
import {Table} from 'antd';
import axios from 'axios'

import UserRoleEditableTableUser from '../Table/UserRole/UserRoleEditableTableUser'

//无状态组件。
class UserRole extends Component{
    constructor(props) {
        super(props);
        // this.addData=this.addData.bind(this)
        
    }
    
    render(){
        return <div>
            <UserRoleEditableTableUser></UserRoleEditableTableUser>
        </div>
    }
}
export default UserRole;

