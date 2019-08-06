import React from "react"
import {Link} from "react-router-dom"

function stepOne() {
        return (
            <div>
        <h1>Add image</h1>
            <input type="text" placeholder= "img URL"/>
            <Link to ="/steptwo">
            <button>Next</button>
            </Link>
            <Link to = "/">
            <button>Cancel</button>
            </Link>
        </div>
    )
}
export default stepOne;