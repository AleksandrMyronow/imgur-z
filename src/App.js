import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ImageList from './imageList';

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            images: [],
            comments: []
        };
        // console.log(this.state);
    }




    componentWillMount() {
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));

    }

    // componentDidMount() {
    //     axios.get(`https://api.imgur.com/3/comment/{{commentId}}`)
    //         .then(response => this.setState({ comment: response.data.data }));
    // }



    render() {
        return (

            <div>
                <ImageList images={this.state.images} comment={this.state.comment}/>
            </div>
        );
    }
}

export default App;
