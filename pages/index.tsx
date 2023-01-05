import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Spotlights } from "../components/Spotlights/Spotlights";
import { GenericHead } from "../components/GenericHead";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <GenericHead />

      <Header />
      <Spotlights />

      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="text-gradient font-bold text-4xl sm:text-4xl md:text-6xl">
            writing {"{"}code{"}"}
          </h1>
        </div>
        <div className={styles.description}>to build the world</div>
      </main>
      <Footer />
    </div>
  );
}
