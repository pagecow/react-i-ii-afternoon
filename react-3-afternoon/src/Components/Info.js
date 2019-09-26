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
            "That Night in Varennes (Nuit de Varennes, La)",
            "Spy(ies) (Espion(s))",
            "Klip (Clip)"],

            idArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            nameArray:[],
            fromArray: [],
            jobTitleArray: [],
            employerArray: [],
            favoriteMoviesArray: []          
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
                
                <ol favoriteMovies={this.state.favoriteMovies}>
                    <li>{this.state.favoriteMovies.pop()}</li>
                    <li>{this.state.favoriteMovies.pop()}</li>
                    <li>{this.state.favoriteMovies.pop()}</li>
                </ol>
            </div>
        )
    }
}

export default Info;