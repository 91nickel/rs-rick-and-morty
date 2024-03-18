import React, { ReactNode } from 'react'
import { Outlet } from "react-router-dom"
import Nav from "../component/nav"

export default function MainLayout() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

interface IProps {
    h1: string
}
