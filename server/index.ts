interface AssetBinding {
  fetch(request: Request): Promise<Response>;
}

interface Environment {
  ASSETS: AssetBinding;
}

const withSecurityHeaders = (response: Response) => {
  const headers = new Headers(response.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  headers.set('X-Frame-Options', 'DENY');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export default {
  async fetch(request: Request, env: Environment): Promise<Response> {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');

    if (response.status !== 404 || request.method !== 'GET' || !acceptsHtml) {
      return withSecurityHeaders(response);
    }

    const url = new URL(request.url);
    url.pathname = '/';
    url.search = '';
    return withSecurityHeaders(await env.ASSETS.fetch(new Request(url, request)));
  },
};
