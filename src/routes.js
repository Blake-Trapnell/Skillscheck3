import React from "react";
import {Route, Switch} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Wizard from "./components/Wizard"
import Stepone from "./components/stepone"
import Steptwo from "./components/steptwo"

export default (
    <Switch>
    <Route component = {Dashboard} exact path = "/"/>
    <Route component = {Wizard} path = "/wizard"/>
    <Route component = {Stepone} path = "/stepone"/>
    <Route component = {Steptwo} path = "/steptwo"/>
    </Switch>
)