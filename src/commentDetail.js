import React from 'react';

const CommentDetail = (props) => {
    return (

            <div className="media-left">
             <p>{props.comment[0]}</p>
            </div>

    );
};

export default CommentDetail;