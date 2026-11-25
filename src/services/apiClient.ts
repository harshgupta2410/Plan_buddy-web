import axios from "axios";
// Single shared API client: base URL from env, Bearer token attached, common errors normalised.
let getToken: () => string | null = () => null;
let onUnauthorized: () => void = () => {};
export const configureApi = (opts: { getToken: () => string | null; onUnauthorized: () => void }) => { getToken = opts.getToken; onUnauthorized = opts.onUnauthorized; };

export const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });
api.interceptors.request.use((cfg) => { const t = getToken(); if (t) cfg.headers.Authorization = `Bearer ${t}`; return cfg; });
api.interceptors.response.use((r) => r, (err) => {
  const status = err.response?.status as number | undefined;
  if (status === 401) onUnauthorized();
  const kind = !err.response ? "network" : status === 403 ? "forbidden" : status === 422 ? "validation" : status && status >= 500 ? "server" : "client";
  return Promise.reject({ kind, status, detail: err.response?.data?.detail ?? err.message });
});
