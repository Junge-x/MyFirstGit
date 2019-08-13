import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react'
import axios from 'axios'
import { Table, Divider, Tag, Button } from 'antd';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
const { Header, Sider, Content, Footer } = Layout;
import Role from '../Page/Role';
import UserRole from '../Page/UserRole';
import User from '../Page/User';
import '../css/index.css'



const MenuItem = Menu.Item;

class App extends Component {
    constructor(props) {
        super(props);
        this.ONcollapsed = this.ONcollapsed.bind(this);
        this.state = {
            collapsed: false,
        };
    }
    ONcollapsed() {
        console.log(this.state.collapsed);
       
        this.setState({
            collapsed: !this.state.collapsed
        })
    };
    render() {
        return <HashRouter>
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header theme='light'><p className = 'biaoti'>用户角色管理</p>用户角色管理</Header>
                    
                    <Layout>
                        <Sider  collapsible collapsed={this.state.collapsed} onCollapse={this.ONcollapsed.bind(this)}>
                            
                            <Menu className = 'me'  defaultSelectedKeys={['1']} mode="inline">
                                <MenuItem key="1" >
                                    <Icon type="pie-chart" />
                                    <span>
                                        <Link to='/'>用户信息</Link>
                                    </span>
                                </MenuItem>
                                <MenuItem key="2">
                                    <Icon type="desktop" />
                                    <span>
                                        <Link to='/role'>角色信息</Link>
                                    </span>
                                </MenuItem>
                                <MenuItem key='3'>
                                    <Icon type="user" />
                                    <span>
                                        <Link to='/userrole'>用户角色信息</Link>
                                    </span>
                                </MenuItem>
                            </Menu>
                        </Sider>
                        <Content>
                            <Layout>
                                
                                <Content
                                    style={{
                                        margin: '24px 16px',
                                        padding: 24,
                                        background: '#fff',
                                        minHeight: 280,
                                    }}
                                >
                                    <Switch>
                                        <Route path='/' exact component={User}></Route>
                                        <Route path='/role' exact component={Role}></Route>
                                        <Route path='/userrole' exact component={UserRole }></Route>
                                    </Switch>
                                    
                                </Content>
                            </Layout>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </HashRouter>
    }
}



export default App;
