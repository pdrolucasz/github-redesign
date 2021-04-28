import { Switch, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Dashboard } from '../pages/Dashboard'

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    )
}
