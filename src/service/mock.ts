import episodes from 'mock/episode.json'
import locations from 'mock/location.json'
import characters from 'mock/characters.json'
import ICharacterMock from "mock/types/character"
import ILocationMock from "mock/types/location"
import IEpisodeMock from "mock/types/episode"

import { EntityType, ICharacter, IEpisode, ILocation } from "./types/mock"

const service = {
    getList: (type: EntityType): Promise<Array<ICharacter | ILocation | IEpisode>> => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                switch (type) {
                case EntityType.character:
                    res((characters as ICharacterMock[]).map(e => ({...e, created: new Date(e.created)})))
                    break
                case EntityType.location:
                    res((locations as ILocationMock[]).map(e => ({...e, created: new Date(e.created)})))
                    break
                case EntityType.episode:
                    res((episodes as IEpisodeMock[]).map(e => ({...e, created: new Date(e.created)})))
                    break
                default:
                    rej(new Error(`type ${type} not found`))
                }
            }, 500)
        })

    },
    getById: async (type: EntityType, id: number): Promise<ICharacter | ILocation | IEpisode> => {
        const list = await service.getList(type)
        const item = list.find(i => i.id === id)
        if (item) return item
        throw new Error(`Not found element with type=${type} && id=${id}`)
    },
}

export default service
