import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, LoginForm, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route  path="/" component={LoginForm} exact/>
              <Route  path="/menu" component={Home} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}