import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/Main/About/About";
import Blog from "../Pages/Main/Blog/Blog";
import Contact from "../Pages/Main/Contact/Contact";
import Home from "../Pages/Main/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import AllProjects from "../Pages/Main/AllProjects/AllProjects";


const router = createBrowserRouter([
     {
        path : "/" ,
        element : <Main /> ,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : 'contact',
                element : <Contact />
            },
            {
                path : 'about',
                element : <About />
            },
            {
                path : 'blog',
                element : <Blog />
            },
            {
                path : 'details/:id',
                element : <ProjectDetails />
            },
            {
                path : 'privacy',
                element : <Privacy />
            },
            {
                path : 'allProject',
                element : <AllProjects />
            },
            {
                path : 'allProject/details/:id',
                element : <ProjectDetails />
            },
            
        ]
     }
]);

export default router