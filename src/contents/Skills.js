import React, { Component } from 'react';

class Skills extends Component {

constructor(props) 

{
    super(props);

    this.state={
        'myskills':['HTML |', ' CSS |', ' JavaScript |', ' React.Js |', ' Google FireBase |', ' Git |', ' Command-Line |', ' Restful API’s |',' QA Testing', ' Python |', ' Node.Js |', ' PHP |', ' Express.Js |', ' SQL |', ' MongoDB |', ' CS fundamentals |', ' jQuery |', ' AJAX |', ' Mocha |', ' Chia |', ' Nightmare |', ' Mongoose |', ' Cherrio.Js |', ' Selenium |', ' Cucumber |', ' Testing life cycle |', ' DOM manipulation |', ' JSON |', ' data structures/algorithms |', ' MVC design patterns'
    ]

    };
}
render() {
    return (
        <div className="condiv skills">
        
        <h1 className="subtopic">My Skills</h1>

        <ul>
        {this.state.myskills.map((value)=>{
            return <il><b>{value}</b></il>
        })}
        </ul>

        </div>


    )
}
}

export default Skills;