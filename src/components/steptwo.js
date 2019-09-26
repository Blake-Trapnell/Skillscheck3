import React, {Component} from "react"
import {Route, Link} from "react-router-dom"
import axios from "axios"
import store, {UPDATE_MORTGAGE,UPDATE_RENT} from "../store"



export default class stepTwo extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent,
        }
    }
    componentDidMount(){
        store.subscribe(()=> {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent,
            })
        })
        console.log(this.state)
    }


    mortgage(e) {
        this.setState({
            mortgage: e
        })
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: e
        })
    }
    rent(e) {
        this.setState({
            rent: e
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: e
        })
    }

    add() {
        const {name, address, city, state, zip, img, mortgage, rent} =this.state
       axios.post(`/api/houses`, {name, address, city, state, zip, img, mortgage, rent}).then(res => {
       console.log(res)
       }).catch(err => console.log(err))
       this.props.history.push("/")
    }

    cancel() {
        this.setState({
            mortgage: '',
            rent: ''
        })
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: '',
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: '',
        })

    }
   

    render() {

        return (
            <div>
            <h3>Monthly Mortgage Amount</h3>
            <input className="wizard-input" type="text" onChange={(e) => { this.mortgage(e.target.value) }} placeholder="Mortgage" value={this.state.mortgage}/>
            <h3>Desired Monthly Rent</h3>
            <input className="wizard-input" type="text" onChange={(e) => { this.rent(e.target.value) }} placeholder={"suggested rent " + this.state.mortgage * 1.25} value={this.state.rent}/>

            <button onClick={()=>this.add()}>Add Home</button>

            <Link to="/stepone">
                    <button>Previous</button>
                </Link>
            <Link to = "/">
            <button onClick ={()=> this.cancel()}>cancel</button>
            </Link>
        </div>
    )
}
}
