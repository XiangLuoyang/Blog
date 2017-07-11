import React, { Component } from 'react';
import '../../static/css/basic.css';
import E from 'wangeditor'

class RichTextEditor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editorContent: ''
        }
    }
    render() {
        return (
            <div className="RichTextEditor">
                {/* 将生成编辑器 */}
                <div ref="editorElem" style={{ textAlign: 'left' }}>
                </div>

                <button onClick={this.clickHandle.bind(this)}>获取内容</button>
            </div>
        );
    }
    componentDidMount() {
        const elem = this.refs.editorElem
        const editor = new E(elem)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()
    }
    clickHandle() {
        alert(this.state.editorContent)
    }
}

export default RichTextEditor;
