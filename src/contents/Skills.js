import React, { Component } from 'react';

class Skills extends Component {

constructor(props) 

{
    super(props);

    this.state={
        'myskills':['HTML |', ' CSS |', ' JavaScript |', ' React.Js |', ' Google FireBase |', ' Git |', ' Command-Line |', ' Restful API’s |',' QA/Automated Testing', ' Python |', ' Node.Js |', ' PHP |', ' Express.Js |', ' SQL |', ' MongoDB |', ' CS fundamentals |', ' jQuery |', ' AJAX |', ' Mocha |', ' Chia |', ' Nightmare |', ' Mongoose |', ' Cherrio.Js |', ' Selenium |', ' Cucumber |', ' Testing life cycle |', ' DOM manipulation |', ' JSON |', ' data structures/algorithms |', ' MVC design patterns |', ' Laravel'
    ]

    };
}
render() {
    return (
        <div className="condiv skills">
        
        <h1 className="subtopic">My Skills</h1>

        <ul>
        {this.state.myskills.map((value)=>{
            return <il>{value}</il>
        })}
        </ul>

        </div>


    )
}
}

export default Skills