import { useParams } from "react-router-dom";
export default function Profile() {
  const params = useParams();
  return <><h1>Profile</h1><p className="muted">TODO: view/edit name and photo (params: {JSON.stringify(params)})</p></>;
}
