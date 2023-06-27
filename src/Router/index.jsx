import { createBrowserRouter } from "react-router-dom";

import LayoutRoot from "../Layout/LayoutRoot";
import LayoutPrivate from "../Layout/LayoutPrivate";

import Home from "../Pages/Home"
import Dashboard from "../Pages/Dashboard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard/>
                    }
                ]
            }
        ]
    }
])