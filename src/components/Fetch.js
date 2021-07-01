import React, { Component } from 'react'
import DisplayElephants from './DisplayElephants'

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elephants: null
        };
      }

    componentDidMount(){
        this.setElephants()
    }  
      
    setElephants = () => {
        fetch("https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    elephants: data
                })
            })  
    }

    totalElephants = (elephants) => {
        let elephantCounter = 0
        for (let elephant of elephants) {
            if (elephant) {
                elephantCounter++
            }
        }
        return elephantCounter
    }

    
    countMales = (elephants) => {
        let maleCounter = 0
        for (let elephant of elephants) {
            if (elephant.sex == "Male") {
                maleCounter ++
            }
        }
        return maleCounter
    }

    countFemales = (elephants) => {
        let maleCounter = 0
        for (let elephant of elephants) {
            if (elephant.sex == "Female") {
                maleCounter ++
            }
        }
        return maleCounter
    }
    
    // sorting elephants by DOB in decending order. I push the 'Unavaliable' DOBs to the back and console.log the result.
    sortByYear = (elephants) => {
        return elephants.sort((a, b) => {
            if (a.dob == "Unavailable") {
                return 1
            }
            if (+a.dob < +b.dob) {
                return 1
            } else {
                return -1
            }
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.elephants ? `${this.totalElephants(this.state.elephants)} total elephants` : ""}</h1>
                <h1>{this.state.elephants ? `${this.countMales(this.state.elephants)} male elephants` : ""}</h1>
                <h1>{this.state.elephants ? `${this.countFemales(this.state.elephants)} female elephants` : ""}</h1>
                {this.state.elephants ? console.log(this.sortByYear(this.state.elephants)) : null}
                <DisplayElephants elephants={this.state.elephants}/>
            </div>
        )
    }
}
