import React,  { Component } from 'react';
import Social from '../Components/Social';
import Widecard from '../Components/Widecard';

class Education extends Component {

    render() {
        return(

            <div className='condiv'>
            
            <h1 className='subtopic'> My Education </h1>

            <Widecard title="B.S. Business Adminstration; Minor in Management & Marketing" where="University of Montana" from="2000" to="2005"/>
            <Widecard title="MERN Full Stack Web Developement Boot camp" where="University of Denver" from="January 2018" to="August 2018"/>

            <br></br>
            <Social/>

            </div>

        )
    }
}

export default Education
