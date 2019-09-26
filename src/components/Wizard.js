import React, { Component } from "react"
import { Link } from "react-router-dom"
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP } from "../store"
import "./wizard.css"


export default class Wizard extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
        }
    }

componentDidMount() {

}

    name(e) {
        this.setState({
            name: e
        })
        store.dispatch({
            type: UPDATE_NAME,
            payload: e
        })
    }
    address(e) {
        this.setState({
            address: e
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: e
        })
    }
    city(e) {
        this.setState({
            city: e
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: e
        })
    }
    usState(e) {
        this.setState({
            state: e
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: e
        })
    }
    zip(e) {
        this.setState({
            zip: e
        })
        store.dispatch({
            type: UPDATE_ZIP,
            payload: e
        })
    }

    cancel() {
        this.setState({
            name: '',
            city: '',
            address: '',
            state: '',
            zip: '',
        })
        store.dispatch({
            type: UPDATE_NAME,
            payload: ''
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: '',
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: '',
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: '',
        })
        store.dispatch({
            type: UPDATE_ZIP,
            payload: '',
        })

    }

    render() {
        return (
            <div className="wizard-main">
                <body className="middle">
                    <h1>Add New Listing</h1>
                    <section>
                        <h3>Name</h3>
                        <input className="wizard-input" type="text" onChange={(e) => { this.name(e.target.value) }} placeholder="Property Name" value = {this.state.name}/>
                        <h3>Address</h3>
                        <input className="wizard-input" type="text" onChange={(e) => { this.address(e.target.value) }} placeholder="Property Address" value = {this.state.address}/>
                        <h3>City</h3>
                        <input className="wizard-input" type="text" onChange={(e) => { this.city(e.target.value) }} placeholder="Property City" value = {this.state.city}/>
                        <h3>State</h3>
                        <input className="wizard-input" type="text" onChange={(e) => { this.usState(e.target.value) }} placeholder="Property State" value = {this.state.state}/>
                        <h3>Zipcode</h3>
                        <input className="wizard-input" type="text" onChange={(e) => { this.zip(e.target.value) }} placeholder="Property Zipcode" value = {this.state.zip}/>
                    </section>
                    <div className="nav-buttons">
                        <Link to="/stepone">
                            <button>Next</button>
                        </Link>
                        <Link to="/">
                            <button onClick ={()=> this.cancel()}>cancel</button>
                        </Link>
                    </div>
                </body>
            </div>
        )
    }
}
