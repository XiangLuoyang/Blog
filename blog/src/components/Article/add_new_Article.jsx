import React from 'react'
import { Link } from 'react-router'
import RichTextEditor from '../Article/RichTextEditor.jsx'
const AddNewArticle = React.createClass({
    render() {
        return (
            <div>
                <div className="container">
                    <Link to="article">返回</Link>
                    <RichTextEditor />
                </div>
            </div>
        )
    }
})

export default AddNewArticle