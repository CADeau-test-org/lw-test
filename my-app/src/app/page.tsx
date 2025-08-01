import Image from "next/image";
import styles from "./page.module.css";
import pets from "./pet_list.json";

/* cmd shift L */
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
        {pets.map((image, index) => ( /* idea: to iterate over list of animals, 
        the curly braces allows to write Javascript inside html
        why javascript? bc we want to make it interactive and dynamic
        .map is a function that acts like a for loop, returns a new array of results
        image is the object and index is the position in the array
         */
          <div key={index} className={styles.imagehov}>
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={image.height}
              priority /*ensures image is preloaded for faster performance */
            />
            <div className={styles.caption}>{image.caption}</div>
          </div>
        ))}
      </main>
    </div>
    {/*
    <div className={styles.album}>
      <main className={styles.gallery}>
        <div className={styles.imagehov}>
          <Image
            src="/Mike.jpg"
            alt="dog 1 pic"
            width={400}
            height={530}
            priority
          />
          <div className={styles.caption}>Mike</div>
        </div>
        <div className={styles.imagehov}>
          <Image
            src="/jerry.jpg"
            alt="cat 1 pic"
            width={400}
            height={450}
            priority
          />
          <div className={styles.caption}>Jerry</div>
        </div>
        <div className={styles.imagehov}>
          <Image
            src="/tom.jpg"
            alt="dog 3 pic"
            width={400}
            height={500}
            priority
          />
          <div className={styles.caption}>Tom</div>
        </div>
        <div className={styles.imagehov}>
          <Image
            src="/mimi.jpg"
            alt="cat 2 pic"
            width={400}
            height={400}
            priority
          />
          <div className={styles.caption}>Mimi</div>
        </div>
        <div className={styles.imagehov}>
          <Image
            src="/lili.jpg"
            alt="cat 3 pic"
            width={400}
            height={500}
            priority
          />
          <div className={styles.caption}>Lili</div>
        </div>
        <div className={styles.imagehov}>
          <Image
            src="/zac.jpg"
            alt="dog 2 pic"
            width={400}
            height={560}
            priority
          />
          <div className={styles.caption}>Zac</div>
        </div>

      </main>
    </div>
    */}
    
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
