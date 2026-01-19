/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esto ayuda a que Vercel maneje mejor las rutas si hay dudas
  trailingSlash: true,
  // Esto asegura que las imágenes carguen sin problemas
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
