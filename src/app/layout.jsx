import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header>
          <div className="lado-e">
            <ul>
              <img src="/img/Darth-Vader.webp" alt="" />
              <div className="dad">
                <li><Link href={"/"}>Home</Link></li>
              </div>
              <div className="dad">
                <li><Link href={"/sobre"}>Sobre</Link></li>
              </div>
              <div className="dad">
                <div className="dropdown">
                  <li><Link href={"/sobre/empresa"}>Sobre Empresa</Link></li>
                  <div className="dropdown-menu">
                    <ul>
                      <li className="li-drop"><Link href={"/"}>Funcionou</Link></li>
                      <li className="li-drop"><Link href={"/"}>Funcionou</Link></li>
                      <li className="li-drop"><Link href={"/"}>Funcionou</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="lado-d">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
            </div>
            <div className="btn bb">Log in</div>
            <div className="btn bbb">Start My Free Trial</div>
          </div>
        </header>
        {children}
        <footer>
          <div className="body-footer">
            <div className="head-footer">
              <div className="section">
              <img src="/img/Darth-Vader.webp" className="img-footer" />
            </div>
            <div className="section-2">
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className="section-2">
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className="section-2">
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className="section-2">
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            </div>
            <div className="row-footer"></div>
            <div className="footer-bottom">
              <span>@Copyright.All rigths reserved</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}