import React from 'react'
import {Link} from 'react-router'
import '../../static/css/basic.css';
import Leftnav from '../util/Leftnav.jsx'
import Row from '../util/Row.jsx'
import ArticleDisplay from '../WelcomePage/ArticleDisplay.jsx'
const Welcome = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="Row">
                    <div className="main">
                        <ul className="note-list">
                            <li>
                                <ArticleDisplay/>
                            </li>
                            <li>
                                <ArticleDisplay/>
                            </li>
                            <li>
                                <ArticleDisplay/>
                            </li>
                        </ul>
                    </div>
                    <div className="aside">
                        <div className="title">
                            个人介绍
                        </div>
                        <div className="description"></div>
                        <ul className="user-dynamic">
                            <li>
                                <Link to="javascript:;">我关注的专题/文集</Link>
                            </li>
                            <li>
                                <Link to="javascript:;">我喜欢的文章</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})

export default Welcome