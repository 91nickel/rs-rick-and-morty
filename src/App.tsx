import React from 'react'
import { Routes, Route } from 'react-router-dom'

import 'App.css'

import Page from 'page'
import Nav from "component/nav"
import ListLayout from "layout/listLayout"
import { EntityType } from "./service/types/mock"

function App() {

    return (
        <div className="container">
            <Nav/>
            <Routes>
                <Route index element={<Page.Home/>}/>
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
            </Routes>
        </div>
    )
}

export default App
