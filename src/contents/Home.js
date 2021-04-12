import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import image from '../images/IMG_3552.jpg';
import Social from '../Components/Social';  


class Home extends Component {

    render() {
        return (
            <div className='condiv home'>
            
            <img src={image} className='profilePic' alt= "profile pic"></img>
            
            <ReactTypingEffect className='typingeffect' text={[ "Hi, I'm Levi. Nice to meet you !"]} speed={100} eraseDelay={700}/>
            
            <Social/>

            </div>
        )
    }
}

export default Home;
