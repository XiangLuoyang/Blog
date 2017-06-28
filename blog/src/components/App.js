import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../static/bootstrap/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <a href="/index" className="navbar-brand">项罗阳的个人博客</a>
              </div>
          </div>
      </nav>
    );
  }
}

export default App;
