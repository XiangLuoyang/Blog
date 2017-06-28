import React from 'react'
import { Link } from 'react-router'
import Leftnav from './Leftnav.js'
import Row from './Row.js'
const Welcome = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="Row">
                    <div className="main">
213
                    </div>
                    <div className="aside">
                        <div className="title">
                            个人介绍
                        </div>
                        <div className="description">

                        </div>
                        <ul className="user-dynamic">
                            <li><Link to="javascript:;">我关注的专题/文集</Link></li>
                            <li><Link to="javascript:;">我喜欢的文章</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})

export default Welcome