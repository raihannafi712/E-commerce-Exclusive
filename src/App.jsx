import HomePage from './pages/HomePage';
import { Route, RouterProvider, Routes , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import WishPage from "./pages/WishPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import ContactPage from './pages/ContactPage';
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";

let routerVar = createBrowserRouter(createRoutesFromElements(

  <>
    <Route element={<Layout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="/wishList" element={<WishPage/>}></Route>
      <Route path="/contacts" element={<ContactPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
    </Route>
    <Route path="*" element={<ErrorPage/>}></Route>         
  </>
))

function App() {

  return (
  <> 
    <RouterProvider router={routerVar}/> 
  </> 
  )
}

export default App
