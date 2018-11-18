import React, { Component } from 'react'
import './App.css'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

import Board from './Board'

class App extends Component {
    render() {
        return (
        <Subscribe to={[AppContainer]}>
            {
                app => {

                    console.log('app', app, app._listeners.length)

                    return (
                    <div className='App'>

                        { app.state.tick }

                        <button onClick={ _ => app.addTick() }>
                            Add
                        </button>

                        <Board />

                        <Board />

                        <Board />

                    </div>
                    )
                }
            }
        </Subscribe>
        )
    }
}

export default App
