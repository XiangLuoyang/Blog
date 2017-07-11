import React from 'react'
import { Link } from 'react-router'
import Leftnav from '../util/Leftnav.jsx'
import RichTextEditor from '../Article/RichTextEditor.jsx'
import AddNewArticle from '../Article/add_new_Article.jsx'
const Article = React.createClass({
    render() {
        return (
            <div>
                <div className="container">
                <p>Article</p>
                <Link className="nav-link" to="article/addArticle">新增文章</Link>
                </div>
            </div>
        )
    }
})

export default Article