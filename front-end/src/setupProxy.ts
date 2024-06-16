import { createProxyMiddleware, RequestHandler } from 'http-proxy-middleware';

export default function setupProxy(app: {
  use: (path: string, handler: RequestHandler) => void;
}) {
  app.use(
    '/oauth2.0',
    createProxyMiddleware({
      target: 'https://nid.naver.com',
      changeOrigin: true,
    }),
  );

  app.use(
    '/oauth',
    createProxyMiddleware({
      target: 'https://kauth.kakao.com',
      changeOrigin: true,
    }),
  );
}
