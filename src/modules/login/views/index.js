import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../../components/widget';
import LogoMotion from '../../../components/LogoMotion';
import './login.less';

class Login extends Component {
    render() {
        return (
            <div className="page-login">
                <div className="page-login-bg">
                    <LogoMotion/>
                </div>
                <form className="page-login-form">
                    <div className="flex-center page-login-form-row">
                        <p className="title">用户名：</p>
                        <input type="text" name="username" placeholder="请输入账号"></input>
                    </div>
                    <div className="flex-center page-login-form-row">
                        <p className="title">密码：</p>
                        <input type="password" name="password" placeholder="请输入密码"/>
                    </div>
                    <div className="page-login-form-row flex-between">
                        <p className="flex">
                            <input id="remember" type="checkbox" value="记住密码" defaultChecked />
                            <label htmlFor="remember">记住密码</label>
                        </p>
                        <Link to="/account/password_find">忘记密码</Link>
                    </div>
                    <div className="page-login-form-row text-align-center">
                        <Button type="submit" className="btn-login" onClick={this.handleSubmit}>
                            登录
                        </Button>
                    </div>
                    <div className="page-login-form-row text-align-center">
                        <Link to="/register" className="go-register">立即注册</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;