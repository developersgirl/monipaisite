import React from 'react';
import { Outlet} from 'react-router-dom'

const Layout = () =>{
    return (
        <div className="layout">
            <header></header>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    )
} 

export default Layout;