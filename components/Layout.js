import React from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import Aside from './Aside'
import Login from './Login'
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