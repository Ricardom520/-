import React, {Component} from 'react';
import ExplorderHeader from '../../../../../../components/ExplorderHeader';
import {common,icon} from '../../../../../../images';
import './self.less';

class Self extends Component {
    render() {
        return (
            <div className="selfContainer">
                <ExplorderHeader title="个人中心"/>
                <div className="selfMenu">
                    <sectoin>
                        <p className="title">
                            <h5>
                                个人资料
                            </h5>
                        </p>
                        <div className="content">
                            <p className="selfPhoto">
                                <div className="theme">
                                    <img></img>个人头像
                                </div>
                                <div className="disc">
                                    <label for="selfPhoto">
                                        <img src={common.self.default}></img>
                                    </label>
                                    <input type="file" id="selfPhoto"/>
                                </div>
                            </p>
                            <p>
                                <div className="theme">
                                    <img></img>个人昵称
                                </div>
                                <div className="disc">
                                    <input type="text" placeholder="请输入您的昵称"></input>
                                    <label className="editor">编辑</label>
                                </div>
                            </p>
                            <p>
                                <div className="theme">
                                    <img></img>Email
                                </div>
                                <div className="disc">
                                    <input type="text" placeholder="请输入您的Email"></input>
                                    <label className="editor">编辑</label>
                                </div>
                            </p>
                            <p>
                                <div className="theme">
                                    <img></img>性别
                                </div>
                                <div className="disc">
                                    <div>
                                        <input type="radio" name="sex"/>男
                                        <input type="radio" name="sex"/>女
                                    </div>
                                    <label className="editor">编辑</label>
                                </div>
                            </p>
                            <p>
                                <div className="theme">
                                    <img></img>口头禅
                                </div>
                                <div className="disc">
                                    <input type="text" placeholder="请输入您的口头禅"></input>
                                    <label className="editor">编辑</label>
                                </div>
                            </p>
                            <p className="selfback">
                                <div className="theme">
                                    <img></img>背景图
                                </div>
                                <div className="disc">
                                    <label for="selfback">
                                        <img src={common.self.default}></img>
                                    </label>
                                    <input type="file" id="selfback"/>
                                </div>
                            </p>
                        </div>
                    </sectoin>
                </div>
            </div>
        )
    }
}

export default Self;