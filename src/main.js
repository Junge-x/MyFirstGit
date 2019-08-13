// import './css/index.css';
// import './css/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/PageHome/app';
// import App from './component/TestRoute/app'
//  import store from './store';
// import index from '../src/component/table/index'


 import { LocaleProvider } from 'antd';
 import zhCN from 'antd/es/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <App />
    </LocaleProvider>,
    document.getElementById('app')
);

