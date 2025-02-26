import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Shop from "./components/Shop/Shop";
import ContactUs from "./components/ContactUs/ContactUs";
import TermsAndPolicy from "./components/TermsAndPolicy/TermsAndPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Blog from "./components/Blog/Blog";
import DentalLab from "./components/DentalLab/DentalLab";
import Book from "./components/Book/Book";
import DentalClinic from "./components/DentalClinic/DentalClinic";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/shop",
      element:<Shop/>
    },
    {
      path:"/contact",
      element:<ContactUs/>
    },
    {
      path:"/term",
      element:<TermsAndPolicy/>
    },
    {
      path:"/privacy",
      element:<PrivacyPolicy/>
    },{
      path:"/blog",
      element:<Blog/>
    },{
      path:"/dentallab",
      element:<DentalLab/>
    },{
      path:"/book",
      element:<Book/>
    },{
      path:"/dentalclinic",
      element:<DentalClinic/>
    }
  ]); 

  return (
    <>
     <RouterProvider router={router} />
    </>  )
}

export default App
