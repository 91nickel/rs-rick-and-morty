import { lazy } from 'react'
import Main from './Main'
import Loading from './Loading'

export default {
    Main,
    Loading,
    List: lazy(() => import('./List')),
}

