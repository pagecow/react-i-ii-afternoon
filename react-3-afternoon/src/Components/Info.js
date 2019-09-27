import React, {Component} from 'react';
import data from './data';

class Info extends Component {
    constructor() {
        super()
        this.state = {
          data: data,
          index: 0
        }
      }

      handleNext = () => {
        if (this.state.index < this.state.data.length - 1) {
          this.setState({index: this.state.index + 1})
        }
      }
    
      handlePrevious = () => {
        if (this.state.index > 0) {
          this.setState({index: this.state.index - 1})
        }
      }

    render(){
        let {data, index, handleNext, handlePrevious} = this.state
        
        return(
           <div>
                
                <div className='white-box'>
                    <h1 className='person-number'>{`${data[index].id}/25`}</h1>
                    
                    <h1 className='person-name'>{`${data[index].name.first} ${data[index].name.last}`}</h1>

                    <br></br>
                    <h3>FROM: {`${data[index].city}, ${data[index].country}`}</h3>
                    <h3>JOB TITLE: {data[index].title}</h3>
                    <h3>EMPLOYER: {data[index].employer}</h3>

                    <br></br>
                    <h3>Favorite Movies:</h3>
                    
                    <ol favoriteMovies={this.state.favoriteMovies}>
                        <li>{data[index].favoriteMovies[0]}</li>
                        <li>{data[index].favoriteMovies[1]}</li>
                        <li>{data[index].favoriteMovies[2]}</li>
                    </ol>
                </div>
                
                {/* BUTTONS */}
                <div className='both-buttons'>

                    <button className='previous-button' onClick={handlePrevious}>{`< Previous`}</button>


                    <button className='next-button' onClick={handleNext}>{`Next >`}</button>

                </div> 
            </div>
        )
    }
}

export default Info;