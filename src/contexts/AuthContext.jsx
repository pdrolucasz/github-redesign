import { createContext, useCallback, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const history = useHistory()

    const [user, setUser] = useState(() => {
        const user = localStorage.getItem('@github:user')

        if(user) {
            return JSON.parse(user)
        }

        return {}
    })
    const [repos, setRepos] = useState(() => {
        const repos = localStorage.getItem('@github:repos')

        if(repos) {
            return JSON.parse(repos)
        }

        return {}
    })

    const signIn = useCallback(async (userName) => {
        const { data: user } = await api.get(`/users/${userName}`)
        const { data: repos } = await api.get(`/users/${userName}/repos`)

        localStorage.setItem('@github:user', JSON.stringify(user))
        localStorage.setItem('@github:repos', JSON.stringify(repos))

        setUser(user)
        setRepos(repos)

        history.push('/dashboard')
    }, [history])

    const updateUser = useCallback(async (description, company, location) => {
        const updatedUser = {...user, bio: description, company, location}

        localStorage.setItem('@github:user', JSON.stringify(updatedUser))

        setUser(updatedUser)
    }, [user])

    return (
        <AuthContext.Provider value={{ user, repos, signIn, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    const context = useContext(AuthContext)

    return context
}