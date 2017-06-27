import React from 'react'
import { Link } from 'react-router'
import Leftnav from './Leftnav.js'
import WelcomeBoard from './WelcomeBoard.js'
const Welcome = React.createClass({
    render() {
        return (
            <div>
                <Leftnav />
                <WelcomeBoard />
            </div>
        )
    }
})

export default Welcome