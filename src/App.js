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

import DataTable from "./views/datatables";
import HorizontalForm from "./views/forms/form-layouts/horizontal";
import VerticalForm from "./views/forms/form-layouts/vertical";
import FormValidation from "./views/forms/form-validation";

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

          {/* Application pages — inside AppLayout */}
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<Navigate to="/dashboard/orders" replace />}
            />

            {/* Dashboards */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/orders" element={<OrdersDashboard />} />

            {/* Apps */}
            <Route path="/apps/mail" element={<MailApp />} />
            <Route path="/apps/calendar" element={<EventCalendar />} />
            <Route path="/apps/users/list" element={<UserListApp />} />
            <Route path="/apps/users/view" element={<UserViewApp />} />

            {/* User pages */}
            <Route path="/pages/user-profile" element={<UserProfile />} />
            <Route path="/pages/user-settings" element={<UserSetting />} />

            {/* Data tables */}
            <Route path="/datatable" element={<DataTable />} />

            {/* Form layouts */}
            <Route
              path="/forms/form-layouts/horizontal"
              element={<HorizontalForm />}
            />
            <Route
              path="/forms/form-layouts/vertical"
              element={<VerticalForm />}
            />

            {/* Form validation */}
            <Route
              path="/forms/form-validation"
              element={<FormValidation />}
            />
          </Route>

          {/* Unknown routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}