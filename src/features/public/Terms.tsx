import { useParams } from "react-router-dom";
export default function Terms() {
  const params = useParams();
  return <><h1>Terms</h1><p className="muted">TODO: final legal content from product owner (params: {JSON.stringify(params)})</p></>;
}
