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
    console.log(this.state.homes)
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
                <div className = "dashboard">
                <header className = "dashboardheader">
                    <h1 className='title'>Dashboard</h1>
            <Link to = "/wizard">
            <button className="addnewproperty">Add new Property</button>
            </Link>
                </header>
            {this.state.homes.map(el => {
                return(
                    <div className= "main-listing-display">
                    <img id = "house" src={el.img} alt='pictur of house img'/>
                    <div className="listing-display">
                        <h4 className="list" >Property Name: {el.name}</h4>
                        <h4 className="list" >Address: {el.address}</h4>
                        <h4 className="list" >City: {el.city}</h4>
                        <h4 className="list" >State: {el.state}</h4>
                        <h4 className="list" >Zip: {el.zipcode}</h4>
                        <button className="addnewproperty add" onClick={()=> this.deleteHome(el.id)}>Delete</button>
                    </div>
                    </div>
                )
            })}

                </div>
        </div>
    )
}
}

