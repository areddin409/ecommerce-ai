import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  // React Compiler disabled due to compatibility issues with Next.js 16 + React 19
  // Re-enable once the issue is resolved in a future release
  // reactCompiler: true,

  experimental: {
    // Turbopack configuration removed as 'turbo' is not a valid experimental option
  },

  // Handle external packages properly
  serverExternalPackages: ["jsdom"]
}

export default nextConfig
