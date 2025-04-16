import React from "react";
import { Outlet } from 'react-router-dom'

export const Root = () => {
    
    return (<>
        <div>Меню</div>

        <Outlet />
        </>
    )
}