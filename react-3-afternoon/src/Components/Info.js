import React, {Component} from 'react';
import Buttons from './Buttons';

class Info extends Component {
    constructor(){
        super();

        this.state = {
            id: 1,
            name: 'Waylin Lumsdon',
            from: 'Likiep, Marshall Islands',
            jobTitle: 'Physical Therapy Assistant',
            employer: 'Twinder',
            favoriteMovies: [
            "That Night in Varennes (Nuit de Varennes, La), Spy(ies) (Espion(s)), Klip (Clip)"],

            idArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            nameArray:["Waylin Lumsdon", 'Hastie Beardsdale', ],
            fromArray: ["Likiep, Marshall Islands", 'Dzvinogrud, Ukraine', ],
            jobTitleArray: ["Physical Therapy Assistant", 'Data Coordiator', ],
            employerArray: ["Twinder", 'Vinte', ],
            favoriteMoviesArray: [["That Night in Varennes (Nuit de Varennes, La), Spy(ies) (Espion(s)), Klip (Clip)"], ["Camp, Her Highness and the Bellboy, Mona and the Time of Burning Love (Mona ja palavan rakkauden aika))"], ]          
    }
}

    render(){
        return(
            <div>
                <h1 className='person-number' id={this.state.id}>{this.state.id}</h1>
                
                <h1 className='person-name' name={this.state.name}>{this.state.name}</h1>

                <br></br>
                <h3 from={this.state.from}>FROM: {this.state.from}</h3>
                <h3 jobTitle={this.state.jobTitle}>JOB TITLE: {this.state.jobTitle}</h3>
                <h3 employer={this.state.employer}>EMPLOYER: {this.state.employer}</h3>

                <br></br>
                <h3>Favorite Movies:</h3>
                
                <h3 favoriteMovies={this.state.favoriteMovies}>
                    <li>{this.state.favoriteMovies}</li>
                    {/* <li>{this.state.favoriteMovies.map(1)}</li>
                    <li>{this.state.favoriteMovies.map(1)}</li> */}
                </h3>

                {/* BUTTONS */}
                <div className='both-buttons'>

                    <button 
                        className='previous-button' 
                        onClick={e => {
                            this.setState({id: this.state.idArray[-0]})
                            this.setState({name: this.state.nameArray[-0]})
                            this.setState({from: this.state.fromArray[-0]})
                            this.setState({jobTitle: this.state.jobTitleArray[-0]})
                            this.setState({employer: this.state.employerArray[-0]})
                            this.setState({favoriteMovies: this.state.favoriteMoviesArray[-0]})
                        
                        }}
                    >
                        &laquo; Previous
                    </button>


                    <button 
                        className='next-button'
                        onClick={e => {
                            this.setState({id: this.state.idArray[+1]})
                            this.setState({name: this.state.nameArray[+1]})
                            this.setState({from: this.state.fromArray[+1]})
                            this.setState({jobTitle: this.state.jobTitleArray[+1]})
                            this.setState({employer: this.state.employerArray[+1]})
                            this.setState({favoriteMovies: this.state.favoriteMoviesArray[+1]})
                        
                        }}
                    >
                        Next &raquo;
                    </button>

                    </div> 
            </div>
        )
    }
}

export default Info;