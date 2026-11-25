import { useParams } from "react-router-dom";
export default function Privacy() {
  const params = useParams();
  return <><h1>Privacy</h1><p className="muted">TODO: final legal content from product owner (params: {JSON.stringify(params)})</p></>;
}
