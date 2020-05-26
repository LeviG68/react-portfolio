import React, { Component } from 'react';
import Social from '../Components/Social';

class Contact extends Component {

    render() {
        return (
            <div className= "condiv">
            <h1 className= "subtopic"> Contact Me </h1>
            <h3><a href= "mailto:Glendenning.levi@gmail.com">Glendenning.levi@gmail.com</a> </h3>
            <h3><a href="https://github.com/LeviG68/"> GitHub : https://github.com/LeviG68/ </a> </h3>
            <Social />

            </div>
        )
    }
}

export default Contact
