import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
// import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: "Primeira aplicação nextjs",
  description: "Aprendendo ecossistema react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}