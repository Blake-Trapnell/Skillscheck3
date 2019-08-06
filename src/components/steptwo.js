import React from "react"
import {Link} from "react-router-dom"

function stepTwo() {
        return (
            <div>
            <h3>Monthly Mortgage Amount</h3>
            <input type="text" placeholder= "Mortgage"/>
            <h3>Desired Monthly Rent</h3>
            <input type="text" placeholder= "Rent"/>
            <Link to ="/steptwo">
            <button>Add Home</button>
            </Link>
            <Link to = "/">
            <button>Cancel</button>
            </Link>
        </div>
    )
}
export default stepTwo;