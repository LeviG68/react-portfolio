import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faenvelope} from '@fortawesome/free-brands-svg-icons'



class Social extends Component {

    render() {

        return (

            <div className='social'>

                <a href="https://github.com/LeviG68" className= "github social"> <FontAwesomeIcon icon={faGithub} size='2x'/>
                </a>
                <a href="https://www.linkedin.com/in/levi-glendenning/" className="linkedin social"><FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </a>
                <a href="https://twitter.com/@DevopPeachfuzz" className= "twitter social"><FontAwesomeIcon icon={faTwitter} size='2x' />
                </a>
                

               
            </div>
        )
    }
}
export default Social