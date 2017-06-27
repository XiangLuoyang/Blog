import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './static/css/basic.css';
import { Router, Route, Link } from 'react-router'

import WelcomeBoard from './WelcomeBoard.js'
import Leftnav from './Leftnav.js'
import Welcome from './Welcome.js'
import Article from './Article.js'
import Message from './Message.js'
import Topnav from './Topnav.js'
import App from "./App.js"



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
