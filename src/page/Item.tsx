import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom'

import { EntityType, ICharacter, IEpisode, ILocation } from 'service/types/mock'
import service from 'service/mock.service'

import DynamicComponent from 'component/hoc/DynamicComponent'
import ErrorBoundary from 'component/hoc/ErrorBoundary'

interface IProps {
    type: EntityType
}

type Entity = ICharacter | ILocation | IEpisode

export default function Item({type}: IProps) {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({} as Entity)

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return
        setIsLoading(true)
        service.getById(type, +id)
            .then(item => {
                setItem(item)
                setIsLoading(false)
            })
            .catch(() => {
                navigate('/notFound')
            })
    }, [type])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="col-12 mb-3">
                <Link className="btn btn-primary" to=".."> &lt; Back</Link>
            </div>
            <div className="col-md-6 col-12">
                <ErrorBoundary>
                    <DynamicComponent element="ItemCard" {...item} />
                </ErrorBoundary>
            </div>
        </>
    )
}
