// Steps for making a React Component
// 1 - import React
import React from 'react';
import ImageDetail from './imageDetail';
import CommentDetail from './commentDetail';

// 2 - create Component
const ImageList = (props) => {
    const ValidImages = props.images.filter(image => {
        return !image.is_album;
    });

    const RenderedImages = ValidImages.map((image) => {
        return <ImageDetail key={image.title} image={image} />
    });

    const RenderedComment = ValidImages.map((comment) => {
        return <CommentDetail key={comment.id} comment={comment} />
    });

    return (
        <ul className="media-list media-group">
            {RenderedImages}
            {RenderedComment}
        </ul>
    );
};

// 3 - export component
export default ImageList;