import React, {Component} from 'react';

class PreviousButton extends Component {
    render(){
        return(
            <div className='both-buttons'>
                <button className='previous-button'>&laquo; Previous</button>
                <button className='next-button'>Next &raquo;</button>
            </div> 
        )
    }
}

export default PreviousButton;