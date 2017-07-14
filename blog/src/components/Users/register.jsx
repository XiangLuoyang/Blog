import React, { Component } from 'react'
import './user.css'

class Register extends React.Component {
    render() {
        return (
            <div className="root">
                <div className="typeInPlate">
                    <ul className="sign-up-container">
                        <li className="urls">注册·登录</li>
                        <li className="lis"><input className="inputs sign-up-username" placeholder="你的昵称" type="text" /></li>
                        <li className="lis"><input className="inputs sign-up-passwd" placeholder="设置密码" type="password" /></li>
                        {/*绑定邮箱以后可以加入邮箱验证系统  */}
                        <li className="lis"><input className="inputs sign-up-email" placeholder="绑定邮箱" type="text" /></li>
                        <li className="lis"><button className="submit">注册</button></li>
                        <p className="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书用户协议 和 隐私政策 。</p>
                    </ul>
                </div>  
            </div>
        )
    }
}

export default Register;