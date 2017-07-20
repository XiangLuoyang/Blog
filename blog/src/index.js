import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './static/css/basic.css';
import { Router, Route, Link } from 'react-router'

import Row from './components/util/Row.jsx'
import Leftnav from './components/util/Leftnav.jsx'
import Topnav from './components/util/Topnav.jsx'
import Welcome from './components/pages/Welcome.jsx'
import Article from './components/pages/Article.jsx'
import AddNewArticle from './components/Article/add_new_Article.jsx'
import InfoBlock from './components/Users/info.jsx'
import Message from './components/pages/Message.jsx'
import App from "./components/App.js"
import Register from "./components/Users/register.jsx"



ReactDOM.render(
    <Router>
        <Route path="/" component={Topnav}>
            <Route path="index" component={Welcome} />
            <Route path="msg" component={Message} />
            <Route path="article" component={Article}/>
            <Route path="article/addArticle" component={AddNewArticle} />
            <Route path="userInfo" component={InfoBlock}/>
        </Route>
        <Route path="register" component={Register} />
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();