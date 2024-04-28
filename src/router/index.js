import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/home/home'
import Main from '../pages/main'
import Mall from '../pages/mall'
import PageOne from '../pages/other/pageOne'
import PageTwo from '../pages/other/pageTwo'
import User from '../pages/user'

const routes = [
    {
        path: '/',
        Component: Main,

        children:[
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                Component: Home,
            },
            {
                path: '/user',
                Component: User,
            },
            {
                path: '/mall',
                Component: Mall,
            },
            {
                path: '/other',
                children:[
                    {
                        path: '/other',
                        element: <Navigate to="/other/pageOne" />
                    },
                    {
                        path: '/other/pageOne',
                        Component: PageOne
                    },
                    {
                        path: '/other/pageTwo',
                        Component: PageTwo
                    }
                ]
            }

        ]
    }
]

export default createBrowserRouter(routes)