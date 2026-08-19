import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer(){
    return(
      <>
      <footer className={styles.footer}>
          <div className={styles.bodyFooter}>
            <div className={styles.headFooter}>
              <div className={styles.section}>
              <img src="/img/Darth-Vader.webp" className={styles.imgFooter} />
            </div>
            <div className={styles.section2}>
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className={styles.section2}>
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className={styles.section2}>
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            <div className={styles.section2}>
              <ul>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
                <li>Footer</li>
              </ul>
            </div>
            </div>
            <div className={styles.rowFooter}></div>
            <div className={styles.footerBottom}>
              <span>@Copyright.All rigths reserved</span>
            </div>
          </div>
        </footer>
      </>
    )
}