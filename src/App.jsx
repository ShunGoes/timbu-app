import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'

const AppLayout = lazy(() => import("./layout"))
const HomePage = lazy(() => import("./pages/home"))
const CartPage = lazy(() => import("./pages/cart"))
const CheckoutPage = lazy(() => import("./pages/checkout"))

function App() {

  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index  element={<HomePage/>} />
          <Route path="cart"  element={<CartPage/>} />
          <Route path="checkout"  element={<CheckoutPage/>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
