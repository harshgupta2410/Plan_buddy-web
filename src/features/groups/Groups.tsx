import { useParams } from "react-router-dom";
export default function Groups() {
  const params = useParams();
  return <><h1>Groups</h1><p className="muted">TODO: list groups, create-group modal, join-by-code flow (invalid/expired/already-member states) (params: {JSON.stringify(params)})</p></>;
}
