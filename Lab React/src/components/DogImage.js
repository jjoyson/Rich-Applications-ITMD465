import React from 'react';

class DogImage extends React.Component {
    render(){
        return <img src = {this.props.imageURL} alt = {this.props.alt} />
    }
}

export default DogImage;