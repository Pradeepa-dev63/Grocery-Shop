// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home/Home'
// import Customer_Home from './Customer/Customer_Home'
// import Seller_Home from './Seller/Seller_Home'
// import Category_product from './Customer/Category_product'
// import Product_types from './Customer/Product_types'
// import Product_card_detail from './Customer/Product_card_detail'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/customer" element={<Customer_Home />} />
//       <Route path="/seller" element={<Seller_Home />} />
//       <Route path="/Category_product" element={<Category_product/>} />
//       <Route path="/category/:slug" element={<Product_types />} />
//       <Route path="/category/:slug/product/:id" element={<Product_card_detail/>} />
//     </Routes>
//   )
// }

// export default App




import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import Seller_Login from "./Seller/Seller_Login";
import Seller_Register from "./Seller/Seller_Register";
import Seller_Profile from "./Seller/Seller_Profile";
import Seller_StoreSetup from "./Seller/Seller_StoreSetup";
import Seller_Products from "./Seller/Seller_Products";
import Seller_Home from "./Seller/Seller_Home";
import Seller_Orders from "./Seller/Seller_Orders";
import Seller_Inventory from "./Seller/Seller_Inventory";
import Seller_Reports from "./Seller/Seller_Reports";
import Seller_Settings from "./Seller/Seller_Settings";
import Seller_AddProduct from "./Seller/Seller_AddProduct";
import Seller_EditProduct from "./Seller/Seller_EditProduct";
import Customer_Home from './Customer/Customer_Home'
import Category_product from './Customer/Category_product'
import Product_types from './Customer/Product_types'
import Product_card_detail from './Customer/Product_card_detail'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Customer_Home />} />

      {/* ---- seller pages Roters ---*/}

      <Route path="/seller" element={<Navigate to="/seller/login" replace />} />
      <Route path="/seller/login" element={<Seller_Login />} />
      <Route path="/seller/register" element={<Seller_Register />} />
      <Route path="/seller/profile" element={<Seller_Profile />} />
      <Route path="/seller/store-setup" element={<Seller_StoreSetup />} />
      <Route path="/seller/dashboard" element={<Seller_Home />} />
      <Route path="/seller/home" element={<Navigate to="/seller/dashboard" replace />} />
      <Route path="/seller/products" element={<Seller_Products />} />
      <Route path="/seller/add-product" element={<Seller_AddProduct />} />
      <Route path="/seller/products/edit/:id"  element={<Seller_EditProduct />} />
      <Route path="/seller/orders" element={<Seller_Orders />} />
      <Route path="/seller/inventory" element={<Seller_Inventory />} />
      <Route path="/seller/reports" element={<Seller_Reports />} />
      <Route path="/seller/settings" element={<Seller_Settings />} />

      {/* --- customer pages Roters -----*/}
         <Route path="/" element={<Home />} />
         <Route path="/customer" element={<Customer_Home />} />
         <Route path="/seller" element={<Seller_Home />} />       
         <Route path="/Category_product" element={<Category_product/>} />     
         <Route path="/category/:slug" element={<Product_types />} />
         <Route path="/category/:slug/product/:id" element={<Product_card_detail/>} />

      

    </Routes>

  )
}

export default App







