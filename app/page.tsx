"use client"
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './pages/admin/AuthContext';
import LoginPage from './pages/admin/login/page';
import RegisterPage from './pages/admin/register/page';
import AdminPage from './pages/admin/page/page';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const authContext = useContext(AuthContext);

  // Kiểm tra xem AuthContext có tồn tại và đã xác thực hay chưa
  if (!authContext || !authContext.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
