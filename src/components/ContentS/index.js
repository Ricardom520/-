import React, {Component} from 'react';
import {common, icon} from '../../images';
import {Link} from 'react-router-dom';
import './contentS.less';

class ContentS extends Component {
    render() {
        const {img, title, time, fav, writer, like} = this.props
        return (
            <li className="ContentsContainer">
                <Link>
                    <img src={img}></img>
                    <div className="disc">
                        <p className="title">
                            <h4>{title}</h4>
                        </p>
                        <p style={{position: 'relative', bottom: '-45px'}}>
                            <span>{time}</span>
                            <span>{fav}人收藏</span>
                        </p>
                        <p style={{position: 'relative', bottom: '-35px'}}>
                            <span>by {writer}</span><span>{like}点赞</span>
                        </p>
                    </div>
                </Link>
            </li>
        )
    }
} 
export default ContentS;