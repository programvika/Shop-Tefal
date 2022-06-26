import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { AuthContext } from '../store/AuthContext/AuthContext';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {
    const {currentUser} = useContext(AuthContext)

    return (
        <Routes>
            {currentUser && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />}/>
            )}
            <Route
                path="*"
                element={<Navigate to={SHOP_ROUTE} replace />}
            />
        </Routes>
    )
})

export default AppRouter;