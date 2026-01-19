import { Inter } from "next/font/google";
import "./globals.css";
// 1. IMPORTAR EL PROVIDER
import { LanguageProvider } from "../context/LanguageContext";
// 2. IMPORTAR EL HEADER (¡Esto faltaba!)
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josué Alvarado | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* El Provider envuelve TODO */}
        <LanguageProvider>
          {/* El Header va AQUÍ, dentro del Provider pero antes del contenido */}
          <Header />

          <main>{children}</main>

          {/* Si tienes un Footer, iría aquí abajo también */}
        </LanguageProvider>
      </body>
    </html>
  );
}
