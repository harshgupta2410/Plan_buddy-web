import { useParams } from "react-router-dom";
export default function Login() {
  const params = useParams();
  return <><h1>Login</h1><p className="muted">TODO: phone OTP + Google via the agreed auth provider; loading/invalid/expired/resend/network states; call signIn(token) (params: {JSON.stringify(params)})</p></>;
}
