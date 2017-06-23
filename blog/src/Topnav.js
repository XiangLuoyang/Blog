import React from 'react'
import { Router, Route, Link } from 'react-router'
import App from "./App.js"

const Topnav = React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="/index" className="navbar-brand">项罗阳的个人博客</a>
                            <Link to="/index" className="navbar-brand">主页</Link>
                            <Link to="/msg" className="navbar-brand">留言板</Link>
                            <Link to="/article" className="navbar-brand">日志</Link>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
})

export default Topnav