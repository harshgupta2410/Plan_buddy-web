import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";
import Landing from "../features/public/Landing";
import Privacy from "../features/public/Privacy";
import Terms from "../features/public/Terms";
import Login from "../features/auth/Login";
import Dashboard from "../features/dashboard/Dashboard";
import Groups from "../features/groups/Groups";
import GroupDetails from "../features/groups/GroupDetails";
import PlanForm from "../features/plans/PlanForm";
import PlanDetails from "../features/plans/PlanDetails";
import Notifications from "../features/notifications/Notifications";
import Profile from "../features/profile/Profile";
import Settings from "../features/profile/Settings";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="groups" element={<Groups />} />
          <Route path="groups/new" element={<Groups />} />
          <Route path="groups/:groupId" element={<GroupDetails />} />
          <Route path="plans/new" element={<PlanForm />} />
          <Route path="plans/:planId" element={<PlanDetails />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}
