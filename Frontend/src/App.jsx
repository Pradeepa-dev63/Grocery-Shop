import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Customer_Home from './Customer/Customer_Home'
import Admin_Home from './Admin/Admin_Home'
import Seller_Home from './Seller/Seller_Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Customer_Home />} />
      <Route path="/seller" element={<Seller_Home />} />
      <Route path="/Admin" element={<Admin_Home />} />


    </Routes>
  )
}

export default App



