// import React from 'React'
import { renderRoutes } from 'react-router-config'

const Layout = ({ route }) => <>{renderRoutes(route.routes)}</>

export default Layout