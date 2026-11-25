import { useParams } from "react-router-dom";
export default function Settings() {
  const params = useParams();
  return <><h1>Settings</h1><p className="muted">TODO: logout + account deletion via approved backend/provider flow (params: {JSON.stringify(params)})</p></>;
}
