import HomePage from './pages/HomePage';
import { Route, RouterProvider, Routes , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import WishPage from "./pages/WishPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import ContactPage from './pages/ContactPage';
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import ShopPage from "./pages/ShopPage";

let routerVar = createBrowserRouter(createRoutesFromElements(

  <>
    <Route element={<Layout/>}>
      <Route index element={<HomePage/>}></Route>
      <Route path="/wishList" element={<WishPage/>}></Route>
      <Route path="/contacts" element={<ContactPage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/wishlist" element={<WishPage/>}></Route>
      <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/accounts" element={<AccountPage/>}></Route>
      <Route path="/shop" element={<ShopPage/>}></Route>
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
