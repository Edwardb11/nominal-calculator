import React from 'react'
import { Route } from 'workbox-routing'
import Register from '../pages/Register'
import Login from '../pages/Login'

const PublicRouter = () => {
  return (
    <div>
              <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </div>
  )
}

export default PublicRouter