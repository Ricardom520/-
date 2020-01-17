import React, {Component} from 'react';
import ExplorderHeader from '../../../../../../components/ExplorderHeader';
import './account.less';
import { icon, common } from '../../../../../../images';

class Account extends Component {
    render() {
        return (
            <div className="accountContainer">
                <ExplorderHeader title="账号设置"/>
                <div className="accountMenu">
                    <sectoin>
                        <p className="title">
                            <h5>
                                修改密码
                            </h5>
                        </p>
                        <div className="content">
                            <p className="oldPwd">
                                <div className="theme">
                                    <img></img>原始密码
                                </div>
                                <div className="disc">
                                    <input type="password" placeholder="请输入您的原始密码"></input>
                                </div>
                            </p>
                            <p className="newPwd">
                                <div className="theme">
                                    <img></img>新密码
                                </div>
                                <div className="disc">
                                    <input type="password" placeholder="请输入您的新密码"></input>
                                </div>
                            </p>
                            <p className="newPwd">
                                <div className="theme">
                                    <img></img>重新输入
                                </div>
                                <div className="disc">
                                    <input type="password" placeholder="请输入再次您的新密码"></input>
                                </div>
                            </p>
                            <div className="btnContent">
                                 <button className="submit">提交</button><button className="reset">重置</button>
                            </div>
                        </div>
                    </sectoin>
                </div>
            </div>
        )
    }
}

export default Account;