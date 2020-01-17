import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../../../components/widget';
import LogoMotion from '../../../components/LogoMotion';
import './register.less';

class Register extends Component {
    render() {
        return (
            <div className="page-register">
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
                    <div className="flex-center page-login-form-row">
                        <p className="title">密码：</p>
                        <input type="password" name="password1" placeholder="请再次输入密码"/>
                    </div>
                    <div className="flex-center page-login-form-row">
                        <p className="title">邮箱：</p>
                        <input type="text" name="eamil" placeholder="请输入邮箱"/>
                    </div>
                    <div className="page-login-form-row text-align-center">
                        <Button type="submit" className="btn-login" onClick={this.handleSubmit}>
                            立即注册
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;