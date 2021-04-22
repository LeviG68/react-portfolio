import React, { Component } from 'react';
import Social from '../Components/Social';

class Contact extends Component {

    render() {
        return (
            <div className= "condiv">
            <h1 className= "subtopic"> Contact Me </h1>
            <h3>Email: <a href= "mailto:Glendenning.levi@gmail.com">Glendenning.levi@gmail.com</a> </h3>
            <h3>GitHub: <a href="https://github.com/LeviG68/">GitHub.com/leviG68/</a></h3>
            <br></br>
            <Social />

            </div>
        )
    }
}

export default Contact
