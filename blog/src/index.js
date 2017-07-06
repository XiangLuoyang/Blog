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
import Message from './components/pages/Message.jsx'
import App from "./components/App.js"



ReactDOM.render(
    <Router>
        <Route path="/" component={Topnav}>
            <Route path="index" component={Welcome} />
            <Route path="msg" component={Message} />
            <Route path="article" component={Article} />
        </Route>
    </Router>,
    document.getElementById('root')
)
registerServiceWorker();