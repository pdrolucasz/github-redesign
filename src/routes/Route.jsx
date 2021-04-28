import {
    Route as ReactRoute,
    Redirect
} from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'

export function Route({ isPrivate = false, component: Component, ...rest }) {
    const { user, repos } = useAuth()

    const privateRoute = user && repos

    return (
        <ReactRoute
            {...rest} 
            render={({ location }) => {
                return isPrivate  === !!privateRoute ? (
                    <Component />
                ) : (
                    <Redirect 
                        to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state: { from:  location}
                        }} 
                    />
                )
            }} 
        />
    )
}

export default Route