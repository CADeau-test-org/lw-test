import Image from "next/image";
import styles from "./page.module.css";
import {myAnimal, animals} from "./animals.ts"

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <Image
      src="/logo.png"
      alt="banner image"
      width={600}
      height={300}
      priority
      />
      <h1 className={styles.title}>Animal Rescue</h1>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Adopt</a>
        <a href="#" className={styles.link}>About Us</a>
        <a href="#" className={styles.link}>Contact Us</a>
      </nav>
    </header>
    <div className={styles.album}>
      <main className={styles.gallery}>
        {
          animals.map((pet) => (
        <div className={styles.imagehov}>
          <Image
            src={pet.src}
            alt={pet.alt}
            width={pet.width}
            height={pet.height}
            priority
          />
          <div className={styles.caption}>{pet.name}</div>
        </div>
          )
        )}
      </main>
    </div>
    
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            A lifetime friend <code>waiting for you</code>.
          </li>
          <li>Bring a friend home today.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    </>
  );
}
