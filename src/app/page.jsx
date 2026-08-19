import Image from "next/image";
import styles from "./home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className={styles.menu}>
        <section className={styles.conteiner}>
          <div className={styles.box}>
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatibus ullam excepturi, possimus ipsa eligendi reiciendis libero, delectus, natus totam error aliquam animi. Labore harum dolore optio minima dolorum odio.</p>
            <button className={styles.btn}>Começar</button>
          </div>
          <div className={styles.png}>
            <Image src="/img/Darth-Vader.webp" alt="Darth Vader" width={400}
              height={400} className={styles.img} />
          </div>
        </section>
      </main>
    </>
  );
}