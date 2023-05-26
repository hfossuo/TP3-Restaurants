import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage/RestaurantDetailsPage';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';
import CustomerOrdersPage from './pages/CustomerOrdersPage/CustomerOrdersPage';
import RestaurantOrdersPage from './pages/RestaurantOrdersPage/RestaurantOrdersPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CartPage from './pages/CartPage/CartPage';
import AddressesPage from './pages/AddressesPage/AddressesPage';
import RestaurantDashboardPage from './pages/RestaurantDashboardPage/RestaurantDashboardPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navbar from './components/NavBar';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";


const App = () => {
    const isAuthenticated = true; // Replace with your authentication logic
    const [file, setFile] = useState(null);
    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    // Handle the response from the server
                    console.log(data);
                })
                .catch((error) => {
                    // Handle any error that occurs during the request
                    console.error(error);
                });
        }
    }
    return (
        <Router>
            <div className="container">
                <Navbar />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={handleUpload}>Upload</button>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
                    <Route path="/restaurants" element={<RestaurantsPage />} />
                    <Route path="/customer/orders" element={<CustomerOrdersPage />} />
                    <Route path="/restaurant/orders" element={<RestaurantOrdersPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/addresses" element={<AddressesPage />} />
                    {isAuthenticated && (
                        <>
                            <Route path="/restaurant/dashboard" element={<RestaurantDashboardPage />} />
                            <Route path="/customers" element={<CustomersPage />} />
                        </>
                    )}
                    <Route path="/authentication" element={<AuthenticationPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
