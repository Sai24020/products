import Link from "next/link";
import styles from "./nav.module.css";

export default function NavMain() {
  return (
    <nav className={styles.navMain}>
      <Link href="/">Home</Link>
      <Link href="/search">Search</Link> {/* Länk till söksidan */}
    </nav>
  );
}


/*import Link from "next/link";
import styles from "./nav.module.css";

export default function NavMain() {
  return (
    <nav className={styles.navMain}>
      <Link href="/">Home</Link>
      <Link href="/about">About us</Link>
      <Link href="/about/history">History</Link>
    </nav>
  );
}*/