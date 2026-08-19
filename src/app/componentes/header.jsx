import styles from "./header.module.css";
import Link from "next/link"

export default function Header(){
    return(
        <header className={styles.header}>
          <div className={styles.ladoE}>
            <ul>
              <img src="/img/Darth-Vader.webp" alt="" />
              <div className={styles.dad}>
                <li><Link href={"/"}>Home</Link></li>
              </div>
              <div className={styles.dad}>
                <li><Link href={"/sobre"}>Sobre</Link></li>
              </div>
              <div className={styles.dad}>
                <div className={styles.dropdown}>
                  <li><Link className={styles.link} href={"/sobre/empresa"}>Sobre Empresa</Link></li>
                  <div className={styles.dropdownMenu}>
                    <ul>
                      <li className={styles.liDrop}><Link href={"/"}>Funcionou</Link></li>
                      <li className={styles.liDrop}><Link href={"/"}>Funcionou</Link></li>
                      <li className={styles.liDrop}><Link href={"/"}>Funcionou</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className={styles.ladoD}>
            <div className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
            </div>
            <div className={`${styles.btn} ${styles.bb}`}>Log in</div>
            <div className={`${styles.btn} ${styles.bbb}`}>Start My Free Trial</div>
          </div>
        </header>
    )
}