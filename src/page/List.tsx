import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import _ from 'lodash'

import service from 'service/http.service'

import { EntityType, ICharacter, IEpisode, ILocation } from 'service/types/mock'
import Layout from 'layout'
import ItemCard from 'component/ItemCard'
import ErrorBoundary from 'component/hoc/ErrorBoundary'
import useEntity from "../hook/useEntity"

interface IListProps {
    type: EntityType
}

type Entity = ICharacter | ILocation | IEpisode

enum Sorts {
    'created' = 'created',
}

enum Orders {
    'asc' = 'asc',
    'desc' = 'desc',
}

const List = ({type}: IListProps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(true)
    // const [list, setList] = useState([] as Entity[])

    const [searchParams, setSearchParams] = useSearchParams({'sort': Sorts.created, 'order': Orders.asc})
    const {list, next, isStarted, isLoading} = useEntity(type)

    const sort = searchParams.get('sort') || Sorts.created
    const order = (searchParams.get('order') as Orders) || Orders.asc

    function handleSortChange() {
        setSearchParams({
            order: order === Orders.asc ? Orders.desc : Orders.asc,
            sort: Sorts.created,
        })
    }

    function getList(page: number) {
        // return service.getList(type)
        //     .then(list => {
        //         console.log(list)
        //         // setList(list)
        //     })
    }

    function getMore() {

    }

    useEffect(() => {
        setIsLoading(true)
        getList(1).then(() => {
            setIsLoading(false)
        })
    }, [type])

    if (isLoading) {
        return <Layout.Loading/>
    }

    const sortedList = _.orderBy(list, sort, order)

    return (
        <>
            <div className="col-12 mb-3">
                <button className="btn btn-success" onClick={handleSortChange}>
                    {order}
                </button>
            </div>
            {
                sortedList.map(item => {
                    return (
                        <div key={item.id} className="col-12 col-md-4 col-lg-3 py-2">
                            <ErrorBoundary>
                                <ItemCard  {...item} />
                            </ErrorBoundary>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List