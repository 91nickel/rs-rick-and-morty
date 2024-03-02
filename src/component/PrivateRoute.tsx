import React, { FunctionComponent } from 'react'
import { useAuth } from "context/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

interface OwnProps {
    children: React.ReactNode
}

type Props = OwnProps;

const PrivateRoute: FunctionComponent<Props> = (props) => {
    const auth = useAuth()
    const location = useLocation()

    if (auth.user === null) {
        return <Navigate to="/login" state={{from: location.pathname}} replace/>
    }
    return <>{props.children}</>
}

export default PrivateRoute
