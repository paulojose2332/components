import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="opa" avatar={faker.image.avatar()} />
            <CommentDetail author="Alex" timeAgo="Today at 02:00AM" content="opa" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" content="opa" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/ >, document.querySelector('#root'))