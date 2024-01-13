import './App.css';
import PageLighting from "./components/page-lighting/page-lighting";
import PageNotFound from "./components/page-not-found/page-not-found";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHome from "./components/page-home/page-home";
import PageSoftware from "./components/page-software/page-software";
import PageContact from "./components/page-contact/page-contact";


const router = createBrowserRouter([
    {
        path: "/",
        element:
            <PageHome/>
    },
    {
        path: "/lighting",
        element:
            <PageLighting/>
    },
    {
        path: "/software",
        element:
            <PageSoftware/>
    },
    {
        path: "/contact",
        element:
            <PageContact/>
    },
    {
        path: "*",
        element:
            <div>
                <PageNotFound/>
            </div>
    }
]);


function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
