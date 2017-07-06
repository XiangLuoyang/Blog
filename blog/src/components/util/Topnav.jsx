import React from 'react'
import { Router, Route, Link } from 'react-router'
import AddOneSecond from './AddOneSecond.jsx'
const Topnav = React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <div className="container">
                            <Link to="/" className="navbar-brand">项罗阳的个人博客</Link>
                            <Link to="/index" className="navbar-brand">主页</Link>
                            <Link to="/msg" className="navbar-brand">留言板</Link>
                            <Link to="/article" className="navbar-brand">日志</Link>
                        </div>
                    </div>
                </nav>
                <AddOneSecond />
                {this.props.children}

            </div>

        )
    }
})

export default Topnav