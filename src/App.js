import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from "./components/ThemeProvider";
import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";
import OrdersDashboard from "./pages/OrdersDashboard";

import MailApp from "./views/apps/mail";
import { EventCalendar } from "./views/apps/calendar";
import UserListApp from "./views/apps/users/list";
import UserViewApp from "./views/apps/users/view";
import UserSetting from "./views/pages/user-settings";
import UserProfile from "./views/pages/user-profile";

import Login from "./views/pages/auth/login";
import Register from "./views/pages/auth/register";
import ForgotPassword from "./views/pages/auth/forgot-password";
import ResetPassword from "./views/pages/auth/reset-password";
import VerifyEmail from "./views/pages/auth/verify-email";
import TwoSteps from "./views/pages/auth/two-steps";
import NotFound from "./views/pages/misc/error-page";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Authentication and error pages — outside AppLayout */}
          <Route path="/pages/auth/login" element={<Login />} />
          <Route path="/pages/auth/register" element={<Register />} />
          <Route path="/pages/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/pages/auth/reset-password" element={<ResetPassword />} />
          <Route path="/pages/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/pages/auth/two-steps" element={<TwoSteps />} />
          <Route path="/pages/misc/error-page" element={<NotFound />} />

          {/* Dashboard pages — inside AppLayout */}
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<Navigate to="/dashboard/orders" replace />}
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/dashboard/orders"
              element={<OrdersDashboard />}
            />

            {/* Mail */}
            <Route 
              path="/apps/mail" 
              element={<MailApp />} 
            />

            {/* Calendar */}
            <Route 
              path="/apps/calendar" 
              element={<EventCalendar />} 
            />

            {/* Users */}
            <Route
              path="/apps/users/list"
              element={<UserListApp />}
            />
            <Route
              path="/apps/users/view"
              element={<UserViewApp />}
            />

            {/* User pages */}
            <Route
              path="/pages/user-profile"
              element={<UserProfile />}
            />
            <Route
              path="/pages/user-settings"
              element={<UserSetting />}
            />
          </Route>

          {/* Unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}