import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { RouterProvider, createBrowserRouter } from "react-router";
import Profile from "./component/Profile/Profile.jsx";
import AddListing from "./addListing/AddListing.jsx";
import { ClerkProvider } from '@clerk/clerk-react'
import SingUp from "./component/User/SingUp.jsx";
import SingIn from "./component/User/SingIn.jsx";
import SearchByCategory from "./search/[category]/index.jsx";
import SearchByOption from "./search/SearchByOption.jsx";
import ListingDetail from "./listing-details/[id]/index.jsx";
import About from './component/About.jsx'
import BlogPage from "./component/Blog.jsx";
import NewCars from './NewCars/NewCars.jsx'
import UsedCars from "./Usecar.jsx/Usecar.jsx";


const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/Add-Listing',
    element:<AddListing/>
  },
  {
    path:'/SingIn',
    element:<SingIn/>
  },
  {
    path: '/SingUp',
    element: <SingUp/>
  },
  {
    path: '/search',
    element:<SearchByOption/>
  },
  {
    path: '/search/:category',
    element:<SearchByCategory/>
  },
  {
    path:'/Listing-deatils/:id',
    element:<ListingDetail/>
  },
  {
    path:'/About',
    element:<About/>
  },
  {
    path:'/Blog',
    element:<BlogPage/>
  },
  {
    path:'/New',
    element:<NewCars/>
  },
  {
    path:'/Used',
    element:<UsedCars/>
  }
 
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")).render(
  <>
    {/* <BrowserRouter> */}
      <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={router}/>
        </ClerkProvider>
      </StrictMode>
    {/* </BrowserRouter> */}
  </>
);
