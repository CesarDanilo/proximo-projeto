import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import SubscriptionPage from './pages/subscriptionsPage';
import LoginPage from './pages/loginPage';
import UserProfilePage from './pages/userProfilePage';
import ProductSearchPage from './pages/ProductSearchPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import MostSearchedProductsPage from './pages/MostSearchedProductsPage';
import { AdminDashboard } from './admin/pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/assinatura" element={<SubscriptionPage />} />
        <Route path="/acessar" element={<LoginPage />} />
        <Route path="/perfil" element={<UserProfilePage />} />
        <Route path="/produtos" element={<ProductSearchPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/mais-pesquisados" element={<MostSearchedProductsPage />} />
        <Route path="/auth/admin/" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
