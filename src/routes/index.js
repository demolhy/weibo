import React, { lazy, Suspense } from 'react'
// import { Redirect } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayouts'
import BlankLayout from '../layouts/BlankLayouts'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const IndexComponent = lazy(() => import('../pages/Index/index'))

const routeArr = [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            component: SuspenseComponent(IndexComponent),
          }
        ]
      }
    ]
  }
]
export default routeArr