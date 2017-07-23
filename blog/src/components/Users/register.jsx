import React, { Component } from 'react'
import './user.css'
import '../../static/css/iconfont.css'
class Register extends React.Component {
    handleClick(){
        //这里设置的应该不是点击样式，而是一个验证功能，如果验证通过则不加以反应。如果不能通过，则阻止下一步。
    }
    render() {
        return (
            <div className="root">
                <div className="typeInPlate">
                    <ul className="sign-up-container">
                        <li className="urls">注册·登录</li>
                        <li className="lis">
                            <div className="board">
                                <i className="iconfont icon-0055"></i>
                                <input className="inputs sign-up-username" placeholder="你的昵称" type="text" />
                            </div>    
                        </li>
                        <li className="lis">
                            <div className="board">
                                <i className="iconfont icon-mima"></i>
                                <input className="inputs sign-up-passwd" placeholder="设置密码" type="password" />
                            </div>    
                        </li>
                        {/*绑定邮箱以后可以加入邮箱验证系统  */}
                        <li className="lis">
                            <div className="board">
                                <i className="iconfont icon-youxiang"></i>
                                <input className="inputs sign-up-email" placeholder="绑定邮箱" type="text" />
                            </div>
                        </li>
                        <li className="lis"><button className="submit" onClick={() => this.handleClick()}>注册</button></li>
                        <p className="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书用户协议 和 隐私政策 。</p>
                    </ul>
                </div>  
            </div>
        )
    }
}

export default Register;