//个人主页页面，显示个人信息
import React, { Component } from 'react'

class InfoBlock extends Component {
    //个人信息板肯定要继承父组件(现在还没想清楚父组件是那个，比如topnav)的用户信息，userId或者userName等
    constructor(props) {
        super()
    }
    render() {
        return (
            <div>
                <div><p>chaosxly</p></div>
            </div>
        )

    }
}
export default InfoBlock;