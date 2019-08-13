import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    constructor(props){
      super(props);
      this.RolenameValueChange=this.RolenameValueChange.bind(this);
      this.state={
        id:'',
        rolename:'',
      }
    }

    //获取修改后的值。
    RolenameValueChange(id,event){
      debugger;
      this.setState({
        id:this.props.itemData.key,
        rolename:event.target.value,
      })
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
          <Form layout="vertical" name='role'>
            <Form.Item label="角色名称">
              <Input  defaultValue={this.props.itemData.rolename} 
              onChange={
                this.RolenameValueChange.bind(this,'')
              } />
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;