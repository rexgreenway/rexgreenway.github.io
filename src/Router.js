import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Something Went Wrong</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
