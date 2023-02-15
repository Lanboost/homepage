console.log("Tes");

module.exports = {
  distDir: 'build',
  basePath: '/homepage',
  async rewrites() {
      console.log("Testttt");
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*' // Proxy to Backend
      }
    ]
  }
}