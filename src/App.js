import React ,{Suspense, lazy}from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error"; 
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./Utilis/store";
import Cart from "./components/Cart";
import Login from "./components/Login";

const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));
const AppLayout=()=>{ 
    return (
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading......</h1>}>
                    <About/></Suspense>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>,
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/Instamart",
                // element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
                element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/Login",
                element:<Login/>
            },
               
        ],
    },
]);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
// root.render(<About/>)