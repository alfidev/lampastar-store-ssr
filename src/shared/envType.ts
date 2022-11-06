export interface Env {
  production: boolean;
  host: string;
  https: boolean;
  hot?: boolean;
  development?: boolean;
  mock_server?: boolean;
  proxy_server_url: string;
}
