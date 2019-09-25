import React, {Component} from 'react';

class PreviousButton extends Component {
    render(){
        return(
            <div className='both-buttons'>
                <button className='previous'>Previous</button>
                <button className='next'>Next</button>
            </div> 
        )
    }
}

export default PreviousButton;