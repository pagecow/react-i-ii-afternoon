import React,{Component} from 'react';

class Buttons extends Component {
    

    stringChangeHandler(value){
        this.setState({
            id: value,
            name: value,
            from: value,
            jobTitle: value,
            employer: value,
            favoriteMovies: value
        })
    }

    previousArrayFilterHandler(value){
        this.setState({
            idArray: value,
            nameArray: value,
            fromArray: value,
            jobTitleArray: value,
            employerArray: value,
            favoriteMoviesArray: value
        })
    }

    nextArrayFilterHandler(value){
        this.setState({
            idArray: value,
            nameArray: value,
            fromArray: value,
            jobTitleArray: value,
            employerArray: value,
            favoriteMoviesArray: value
        })
    }


    render() {
        return(
            <div className='both-buttons'>

                <button 
                    className='previous-button' 
                    
                >
                    &laquo; Previous
                </button>


                <button 
                    className='next-button'
                    onClick={e => {
                        this.props.id = this.state.idArray[1] 
                    }}
                >
                    Next &raquo;
                </button>

            </div> 
        )
    }
}

export default Buttons;