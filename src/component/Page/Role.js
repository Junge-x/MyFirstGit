import React,{Component} from 'react';
import {Table} from 'antd';
import axios from 'axios'

import RoleEditableTableUser from '../Table/Role/RoleEditableTableUser'

//无状态组件。
class Role extends Component{
    constructor(props) {
        super(props);
        // this.addData=this.addData.bind(this)
        
    }
    
    render(){
        return <div>
            <RoleEditableTableUser></RoleEditableTableUser>
        </div>
    }
}
export default Role;

