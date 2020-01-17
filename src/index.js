import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import Router from './common/router';
import {HashRouter  as Router, Route} from 'react-router-dom';
import App from './App';
import Explorer from './modules/explorer/views';
import Login from './modules/login/views';
import Register from './modules/register/views';
import Find from './modules/find/views';
import Social from './modules/social/views';
import map from './modules/map/views';
import Admin from './modules/admin/views';
import SoftWare from './modules/software/views';
import Live from './modules/live/views';
import Self from './modules/self/views';
import './themes/index.less';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/find" component={Find}/>
            <Route path="/social" component={Social}/>
            <Route path="/explorer" component={Explorer} />
            <Route path="/map" component={map}/>
            <Route path="/software" component={SoftWare}/>
            <Route path="/live" component={Live}/>
            <Route path="/self" component={Self}/>
            <Route path="/admin" component={Admin}/>
        </div>
    </Router>
    ,
    document.getElementById('root')
);