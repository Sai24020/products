import { fetchRecipe } from "@/actions";
import styles from "./page.module.css";
import { CardList } from "@/components/product-cards/cards";

export default async function Home() {
  const { products } = await fetchRecipe();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardList products={products} />
      </main>
    </div>
  );
}


/*import { fetchRecipe } from "@/actions";
import styles from "./page.module.css";
import { CardList } from "@/components/product-cards/cards";

export default async function Home() {
  const { products } = await fetchRecipe();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CardList products={products} />
      </main>
    </div>
  );
}*/

