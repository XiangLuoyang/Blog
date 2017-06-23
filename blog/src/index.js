import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, Link } from 'react-router'
import Welcome from './Welcome.js'
import Article from './Article.js'
import Message from './Message.js'


const RouteControl = React.createClass({
    render() {
        return (
            <div>
                <App />
                <h1>这里是所有页面都有的导航栏</h1>
                <ul>
                    <li><Link to="/index">主页</Link></li>
                    <li><Link to="/msg">留言板</Link></li>
                    <li><Link to="/article">日志</Link></li>
                </ul>
                
                {this.props.children}
            </div>
            
        )
    }
})

ReactDOM.render(
    <Router>
        <Route path="/" component={RouteControl}>
            <Route path="index" component={Welcome} />
            <Route path="msg" component={Message} />
            <Route path="article" component={Article} />
        </Route>
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();
