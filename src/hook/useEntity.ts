import React, { useEffect, useState } from 'react'
import service from 'service/http.service'

import ICharacterMock from "mock/types/character"
import ILocationMock from "mock/types/location"
import IEpisodeMock from "mock/types/episode"

import { EntityType, ICharacter, IEpisode, ILocation } from "service/types/mock"

const useEntity = (type: EntityType) => {
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])

    useEffect(function () {
        service.get(type, {params: {page}})
            .then(res => {
                console.log(res)
            })
    }, [type])

    return {
        list,
        next: () => {},
        isStarted: false,
        isLoading: false,
    }
}

export default useEntity
