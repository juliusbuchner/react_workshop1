import React, { Component } from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
    render() {
        return(
            <div className="App">
                <h1>Hello, all the Goats.</h1>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))