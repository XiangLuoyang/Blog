import React from 'react'
import { Link } from 'react-router'

const Message = React.createClass({
    render() {
        return (
            <div>
                <h1>Message</h1>
                <ul>
                    <li><Link to="/">主页</Link></li>
                    <li><Link to="/msg">留言板</Link></li>
                    <li><Link to="/article">日志</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

export default Message