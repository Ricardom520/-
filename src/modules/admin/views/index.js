import React, {Component} from 'react';
import {common, icon} from '../../../images';
import {Link} from 'react-router-dom';
import './admin.less';

class Admin extends Component {
    render() {
        return (
            <div className="adminContainer">
                <div className="leftContainer">
                    <div className="headerContainer">
                        <img src={common.logoIcon.default}></img>
                        <img src={common.logoText.default}></img>
                    </div>
                    <div className="bodyContainer">
                        <ul>
                            <li>
                                <Link className="active">流量监控</Link>
                            </li>
                            <li>
                                <Link>生活社区</Link>
                            </li>
                            <li>
                                <Link>图片社区</Link>
                            </li>
                            <li>    
                                <Link>IT社区</Link>
                            </li>
                            <li>    
                                <Link>文章社区</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="headerContainer">
                        <img src={common.button.default} className="menusImg"></img>
                        <div>
                            <img src={common.news.default}></img>
                            <img src={common.adminPhoto.default} className="adminPhoto"></img>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;