import React from 'react'

class ArticleDisplay extends React.Component {
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
            <button onClick={this.handleClick}>
                Say hello
            </button>
        );
    }

}