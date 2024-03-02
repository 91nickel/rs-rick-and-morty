import React from 'react'
import { Routes, Route } from 'react-router-dom'

import 'App.css'

import Page from 'page'
import Nav from "component/nav"
import ListLayout from "layout/listLayout"
import { EntityType } from "./service/types/mock"
import { AuthProvider } from "./context/AuthProvider"
import MainLayout from "./layout/MainLayout"
import PrivateRoute from "./component/PrivateRoute"

function App() {
    return (
        <div className="container">
            <AuthProvider>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route index element={<Page.Home/>}/>
                    </Route>
                    <Route element={<PrivateRoute><MainLayout/></PrivateRoute>}>
                        <Route path="characters" element={<ListLayout h1="Characters"/>}>
                            <Route index element={<Page.List type={EntityType.character}/>}/>
                            <Route path=":id" element={<Page.Item type={EntityType.character}/>}/>
                        </Route>
                        <Route path="locations" element={<ListLayout h1="Locations"/>}>
                            <Route index element={<Page.List type={EntityType.location}/>}/>
                            <Route path=":id" element={<Page.Item type={EntityType.location}/>}/>
                        </Route>
                        <Route path="episodes" element={<ListLayout h1="Characters"/>}>
                            <Route index element={<Page.List type={EntityType.episode}/>}/>
                            <Route path=":id" element={<Page.Item type={EntityType.episode}/>}/>
                        </Route>
                        <Route path="*" element={<Page.NotFound/>}/>
                    </Route>
                    <Route path="login" element={<Page.Login/>}/>
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
