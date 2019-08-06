import React, {Component} from "react"
import { Link} from "react-router-dom"
import "./Dashboard.css"
// import store, {UPDATE_NAME} from "../store"

import axios from "axios"

export default class Dashboard extends Component {
    constructor(){
        super()
        // const reduxState = store.getState()
        this.state = {
            homes: []
        }
    }
componentDidMount() {
    axios.get(`/api/houses`).then(res => {
        this.setState({
            homes: res.data
        })
    }).catch(err=> console.log(err))
}

deleteHome(id) {
    axios.delete(`/api/houses/${id}`).then(res => {
        this.setState({
            homes: res.data
        })}).catch(err => console.log(err))
}

    render() {
        return (
            <div className = "display">
                <body className = "dashboard">
            {this.state.homes.map(el => {
                return(
                    <div className="listing-display">
                        <h4>{el.name}</h4>
                        <h4>{el.address}</h4>
                        <h4>{el.city}</h4>
                        <h4>{el.state}</h4>
                        <h4>{el.city}</h4>
                        <h4>{el.zip}</h4>
                        <button onClick={()=> this.deleteHome(el.id)}>Delete</button>
                    </div>
                )
            })}
            <Link to = "/wizard">
            <button>Add new Property</button>
            </Link>

                </body>
        </div>
    )
}
}

