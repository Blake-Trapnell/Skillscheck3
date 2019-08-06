import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import store, {UPDATE_NAME} from "../store"

export default class Wizard extends Component {
    constructor() {
        super()
         const reduxState = store.getState()
        this.state = {
            home: {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            },
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
        }
 }
 name(e) {
    this.setState({
      name: e})
 }
 address(e) {
    this.setState({
      address: e})
 }
 city(e) {
    this.setState({
      city: e})
 }
 usState(e) {
    this.setState({
      state: e})
 }
 zip(e) {
    this.setState({
      zip: e})
 }
 add() {
     const {name, address, city, state, zip} =this.state
    axios.post(`/api/houses`, {name, address, city, state, zip}).then(res => {
    console.log(res)
    }).catch(err => console.log(err))
 }
saveChanges() {
    store.dispatch({
        type: UPDATE_NAME,
        payload: this.state.home.name
    })
}

    render() {
        return (
            <div>
        <h1>Wizard</h1>
        <input type="text" onChange= {(e)=>{this.name(e.target.value)}} placeholder= "Property Name" />
        <input type="text" onChange= {(e)=>{this.address(e.target.value)}} placeholder= "Property Address" />
        <input type="text" onChange= {(e)=>{this.city(e.target.value)}} placeholder= "Property City" />
        <input type="text" onChange= {(e)=>{this.usState(e.target.value)}} placeholder= "Property State" />
        <input type="text" onChange= {(e)=>{this.zip(e.target.value)}} placeholder= "Property Zipcode" />
        <button onClick={()=>this.add()}>Add Home</button>
        <Link to = "/">
        <button>cancel</button>
        </Link>
        <Link to = "/stepone">
        <button>Next</button>
        </Link>
        </div>
    )
}
}
