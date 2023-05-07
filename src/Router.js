import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App'


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <h1>Something Went Wrong</h1>,
        children: [
            {
                index: true,
                element: <App />
            },
        ]
    },
]);


export default function Router() {
    return <RouterProvider router={router}/>;
};
