import React from 'react'
import '../../static/css/basic.css';
//用ES6的class语法声明一个组件
class ArticleDisplay extends React.Component {
    //constructor：构造函数，初始化state
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello!'
        };
        // 这行很重要
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick() {
        alert(this.state.message);
    }
    render() {
        // Because `this.handleClick` is bound, we can use it as an event handler.
        return (
            <div className="ArticleDisplay">
                <div className="author">
                    <a className="blue-link">项罗阳</a>
                    <span className="time" data-shared-at="2017-01-02T12:48:44+08:00">01.02 12:48</span>
                </div>
                <a className="title" href="www.baidu.com">HTML5新特性</a>
                <p className="abstract">
                    问答 1.不管是招聘还是聊天经常能听到 h5开发，它指的是什么？和 HTML5有什么关系?
                    h5指的是一系列技术做的移动端ppt,它的页面很酷炫，可以提高公司的逼格，亮瞎访问...
                </p>
                <div className="meta">有多少人喜欢之类的</div>
            </div>
        // <button onClick={this.handleClick}>     Say hello </button>
        );
    }
}

export default ArticleDisplay;