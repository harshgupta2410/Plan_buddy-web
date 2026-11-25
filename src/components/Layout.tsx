import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../app/AuthContext";
const links = [["/app","Dashboard"],["/app/groups","Groups"],["/app/notifications","Notifications"],["/app/profile","Profile"],["/app/settings","Settings"]];
export default function Layout() {
  const { signOut } = useAuth();
  return (
    <div className="shell">
      <nav className="sidebar" aria-label="Main">
        <strong>PlanBuddy</strong>
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/app"}>{label}</NavLink>)}
        <button className="btn secondary" onClick={signOut}>Log out</button>
      </nav>
      <main className="content"><Outlet /></main>
    </div>
  );
}
