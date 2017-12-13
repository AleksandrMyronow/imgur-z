import React from 'react';


const ImageDetail = (props) => {
console.log(props);
    let tags = props.image.tags.map(function(tags) {
        return (tags.display_name);
    });

    // console.log(tags);
    return (

        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.image.title}</h4>
                <p>{props.image.description}</p>
                <p>{tags}</p>



            </div>
        </li>
    );
};

export default ImageDetail;