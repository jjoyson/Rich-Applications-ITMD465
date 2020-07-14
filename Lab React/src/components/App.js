import React from 'react';
import img from '../images/logo.svg';
import DogImage from './DogImage';
import { runInThisContext } from 'vm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {image: img};
  }

  componentDidMount() {
    console.log('--componentDidMount--');
    fetch('https://dog.ceo/api/breed/husky/images/random').then((res) => {
        return res.json();
    }).then((json) => {
        this.setState({
          image: json
        });
    });
}

  render() {
    return (
    	<div style={{textAlign: 'center'}}>
    		<h1>Husky Dog Image Generator</h1>
        <h2>Jithin Joyson-jjoyson@hawk.iit.edu-ITMD-465</h2>
        <p>Please press the button to generate a new random image</p>
        <button onClick = {() => {
            fetch('https://dog.ceo/api/breed/husky/images/random').then((res) => {
              return res.json();
            }).then((json) => {
                this.setState({
                  image: json
                });
            });
        }}>Fetch</button>
    		<hr/>
        <DogImage imageURL={this.state.image.message} alt="Husky" />
    	</div>
    );
  }
}

export default App;