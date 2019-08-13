import { Table, Input, Button, Popconfirm, Form, Module } from 'antd';
import '../css/role.css'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import 'antd/dist/antd.css';
import CollectionCreateForm from './CollectionCreateForm'
import InsertForm from './InsertForm'

const EditableContext = React.createContext();

class EditableTableUser extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.ReturnData = this.ReturnData.bind(this)
    this.InsertUser=this.InsertUser.bind(this);

    // this.saveFormRef=this.saveFormRef.bind(this)
    // this.Save=this.Save.bind(this),
    this.InserthandleCancel=this.InserthandleCancel.bind(this);

    this.columns = [
      {
        title: '用户姓名',
        dataIndex: 'username',
        width: '35%',
        editable: true,
      },
      {
        title: '密码',
        dataIndex: 'password',
        width: '30%',
      },

      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <span>
                    <a
                      href="javascript:;"
                      onClick={() => this.showModal(record)}
                      style={{ marginRight: 8 }}
                    >
                      编辑
                    </a>  

                <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)}>
                  <a href="javascript:;">删除</a>
                </Popconfirm>
            </span>    
          ) : null,
        
      }];

    this.state = {
      dataSource: [],
      popupVisiable: false,
      visible: false,
      Insertvisible:false,
      ModalData: {
        id: '',
        username: '',
        password: '',
      },
      NewUser: {
        userid: '',
        username: '',
        password: '',
      }
    };
  }
  handleDelete(key) {
    debugger
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    axios.get('http://localhost:8080/deleteuser',
      {  //params参数必写 , 如果没有参数传{}也可以
        params: {
          userid: key,
        }
      }
    ).then((res) => {
      console.log(res);
      if (res.data == 'success') {
        alert("数据删除成功");
      } else {
        alert("数据删除失败");
      }
    }).catch((err) => {
      console.log(err);
    })

  };
  componentDidMount() {
    debugger;
    axios.get('http://localhost:8080/list').then((res) => {
      console.log(res);
      var data = [];
      debugger;
      res.data.map((value) => {
        data.push({
          key: value.userid,
          username: value.username,
          password: value.password,

        })
      })
      console.log(data)
      this.setState({
        dataSource: [...data]
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  //新增数据插入；
  InsertUser(){
    let user = this.state.NewUser;
    axios.post('http://localhost:8080/insertuser', user).then((res) => {
      console.log(res);
      if (res.data == 'success') {
        this.InserthandleCancel();
        this.componentDidMount();
        alert("数据插入成功");
      } else {
        alert("数据插入失败");
      }
    }).catch((err) => {
      console.log(err);
    })

  }


  //新增显示窗口；
  InsertShowModal(){
    this.setState({
      Insertvisible:true,
    })
  }

  // 点击展示弹窗（修改数据）
  showModal(record) {
    debugger;
    this.setState({
      visible: true,
      ModalData: record,
    });
  };

  //关闭弹窗。
  handleCancel() {
    this.setState({ visible: false });
  };

  //新增数据弹窗关闭
  InserthandleCancel() {
    this.setState({ Insertvisible: false });
  };


  //增加修改数据
  handleCreate() {
    debugger;
    let user = this.state.NewUser;
    axios.post('http://localhost:8080/updateuser', user).then((res) => {
      console.log(res);
      if (res.data == 'success') {
        this.handleCancel();
        this.componentDidMount();
        alert("数据更新成功");
      } else {
        alert("数据更新失败");
      }
    }).catch((err) => {
      console.log(err);
    })


  };


  //保存数据
  ReturnData(userValue) {
    debugger;
    this.setState({
      NewUser: {
        userid: userValue.id,
        username: userValue.username,
        password: userValue.password,
      }
    })

  }


  render() {

    const { dataSource } = this.state;
    return <div>
      <Button onClick={this.InsertShowModal.bind(this)} type="primary" style={{ marginBottom: 16 }}>
        新增数据
        </Button>
      <Table
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={this.columns}
        // onRow={(record, rowkey) => {
        //   return {
        //     onClick: this.showModal.bind(this, record, rowkey)
        //   }
        // }}
      />
      <CollectionCreateForm
        // wrappedComponentRef={this.saveFormRef.bind(this)}
        visible={this.state.visible}
        onCancel={this.handleCancel.bind(this)}
        onCreate={this.handleCreate.bind(this)}
        itemData={this.state.ModalData}
        onReturnData={this.ReturnData.bind(this)}
      />
      <InsertForm
        visible={this.state.Insertvisible}
        onCancel={this.InserthandleCancel.bind(this)}
        onCreate={this.InsertUser.bind(this)}
        onReturnData={this.ReturnData.bind(this)}
      />>

      
    </div>
  }



}
//   ReactDOM.render(<EditableTable />, document.getElementById('container'));
export default EditableTableUser;