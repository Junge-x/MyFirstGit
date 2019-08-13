import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props){
      super(props);
      this.UsernameValueChange=this.UsernameValueChange.bind(this);
      this.PasswordValueChange=this.PasswordValueChange.bind(this);
      this.state={
        id:'',
        username:'',
        password:'',
      }
    }

    //获取修改后的值。
    UsernameValueChange(id,event){
      debugger;
      this.setState({
        id:this.props.itemData.key,
        username:event.target.value,
      })
      this.props.onReturnData(this.state)
   }
    PasswordValueChange(id,event){
      debugger;
      this.setState({
        id:this.props.itemData.key,
        password:event.target.value,
      })
      console.log(123456);
      this.props.onReturnData(this.state)
  }

    render() {
      const { visible, onCancel, onCreate,onReturnData, form,itemData } = this.props;
      debugger;
      

      return (
        <Modal
          visible={visible}
          title="修改数据"
          okText="修改"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" name='user'>
            <Form.Item label="用户姓名">
              <Input name='username1'  defaultValue={this.props.itemData.username} 
              onChange={
                this.UsernameValueChange.bind(this,'')
              } />
            </Form.Item>
            <Form.Item label="用户密码">
              <Input defaultValue={this.props.itemData.password}  type="textarea"
              onChange={
                this.PasswordValueChange.bind(this,'')
              } />
          
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;