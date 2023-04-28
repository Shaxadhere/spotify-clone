import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../../views/Home';
import Layout from '../../components/BasicUI/Layout';


const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        },
    ]);
    return <RouterProvider router={router} />

}

export default Routes