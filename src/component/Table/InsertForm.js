import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Button, Modal, Form, Input, Radio } from "antd";

const InsertForm = Form.create({ name: "form_in_modal" })(
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
        username:event.target.value,
      })
      this.props.onReturnData(this.state)
   }
    PasswordValueChange(id,event){
      debugger;
      this.setState({
        password:event.target.value,
      })
      this.props.onReturnData(this.state)
  }

    render() {
      const { visible, onCancel, onCreate,onReturnData, form,itemData } = this.props;
      debugger;
      

      return (
        <Modal
          visible={visible}
          title="新增数据"
          okText="新增"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" name='user'>
            <Form.Item label="用户姓名">
              <Input name='username1'   
              onChange={
                this.UsernameValueChange.bind(this,'')
              } />
            </Form.Item>
            <Form.Item label="用户密码">
              <Input   type="textarea"
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

export default InsertForm;