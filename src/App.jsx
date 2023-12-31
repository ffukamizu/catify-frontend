import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import ResetStyle from './styles/ResetStyles';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MarketplacePage from './pages/MarketplacePage';
import ProductPage from './pages/ProductPage';
import PortfolioPage from './pages/PortfolioPage';
import InsertPage from './pages/InsertPage';
import { AuthProvider } from './context/AuthContext';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <ResetStyle />
                <GlobalStyle></GlobalStyle>
                <Routes>
                    <Route
                        path="/"
                        element={<SignInPage />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUpPage />}
                    />
                    <Route
                        path="/marketplace"
                        element={<MarketplacePage />}
                    />
                    <Route
                        path="/products/:id"
                        element={<ProductPage />}
                    />
                    <Route
                        path="/portfolio"
                        element={<PortfolioPage />}
                    />
                    <Route
                        path="/insert"
                        element={<InsertPage />}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
