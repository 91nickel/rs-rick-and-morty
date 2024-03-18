import React from 'react'

import AuthProvider from './context/AuthProvider'
import AppRouter from './route/AppRouter'

import 'App.css'

function App() {
    return (
        <div className="container">
            <AuthProvider>
                <AppRouter/>
            </AuthProvider>
        </div>
    )
}

export default App
