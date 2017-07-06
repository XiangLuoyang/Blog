import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './static/css/basic.css';
import { Router, Route, Link } from 'react-router'

import Row from './components/util/Row.js'
import Leftnav from './components/util/Leftnav.js'
import Topnav from './components/util/Topnav.js'
import Welcome from './components/pages/Welcome.js'
import Article from './components/pages/Article.js'
import Message from './components/pages/Message.js'
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