import { useParams } from "react-router-dom";
export default function Landing() {
  const params = useParams();
  return <><h1>Landing</h1><p className="muted">TODO: hero, tagline Make Plans Together, feature highlights, footer with Privacy/Terms links (params: {JSON.stringify(params)})</p></>;
}
