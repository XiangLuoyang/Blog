import React from 'react'
import { Link } from 'react-router'
import Leftnav from '../util/Leftnav.jsx'
import RichTextEditor from '../Article/RichTextEditor.jsx'
import AddNewArticle from '../Article/add_new_Article.jsx'
import ShowArticle from '../Article/show_article.jsx'
const Article = React.createClass({
    render() {
        return (
            <div>
                <div className="container">
                <p>Article</p>
                <Link className="nav-link" to="article/addArticle">新增文章</Link>
                {/*接下来在ShowArticle组件中根据数据库的条数显示，即是把下面的几条ShowArticle在../Article/show_article.jsx中处理成一条*/}
                <ShowArticle />
                <ShowArticle />
                <ShowArticle />
                </div>
            </div>
        )
    }
})

export default Article