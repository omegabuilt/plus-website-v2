/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: [
          {
            // Prevent clickjacking — only allow your site to frame itself
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            // Stop browsers from MIME-sniffing the content type
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Control referrer information sent with requests
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Force HTTPS for 1 year, include subdomains
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            // Limit browser features the site can access
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            // Content Security Policy
            key: "Content-Security-Policy",
            value: [
              // Only allow resources from your own origin by default
              "default-src 'self'",
              // Scripts: self + inline (Next.js needs it) + eval (Next.js dev)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com",
              // Styles: self + inline (Tailwind/Next.js needs it) + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Images: self + data URIs + YouTube thumbnails
              "img-src 'self' data: https://img.youtube.com https://www.googletagmanager.com https://www.google-analytics.com",
              // Fonts: self + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com",
              // Frames: only YouTube embeds
              "frame-src https://www.youtube.com",
              // Connections: self + YouTube + Google analytics (if added later)
              "connect-src 'self' https://www.youtube.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com",
              // Block all object/embed elements
              "object-src 'none'",
              // Restrict base URI to self
              "base-uri 'self'",
              // Only allow form submissions to self
              "form-action 'self'",
              // Block all frame ancestors except self (anti-clickjacking)
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
