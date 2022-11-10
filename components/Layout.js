import React from 'react'
import Navbar from './interface/Navbar'
import Filter from './interface/Filter'
import Aside from './interface/Aside'
import Login from './interface/Login'
function Layout({children}) {
    return <div className='container'>

        <Navbar />
        <Login/>
        <Filter/>
        {children}
        <Aside/>
    </div>
}

export default Layout