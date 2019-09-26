import React, { Component } from "react"
import { Link } from "react-router-dom"
import store, { UPDATE_IMG } from "../store"
import "./wizard.css"

export default class stepOne extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }
    }

    img(e) {
        this.setState({
            img: e
        })
        store.dispatch({
            type: UPDATE_IMG,
            payload: e
        })
        console.log(this.state.img)
    }
    cancel() {
        this.setState({
            img: '',
        })
        store.dispatch({
            type: UPDATE_IMG,
            payload: '',
        })

    }

    render() {

        return (
            <div>
                <h1>Add image</h1>
                <input className="wizard-input" type="text" onChange={(e) => { this.img(e.target.value) }} placeholder="Img Url" value={this.state.img}/>
                <Link to="/steptwo">
                    <button>Next</button>
                </Link>
                <Link to="/wizard">
                    <button>Previous</button>
                </Link>
                <Link to="/">
                <button onClick ={()=> this.cancel()}>cancel</button>
                </Link>
            </div>
        )
    }
}
