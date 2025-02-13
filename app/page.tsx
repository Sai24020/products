/*"use client";
import { useState } from "react";*/

import { fetchProduct } from "@/actions";
import styles from "./page.module.css";
import { CardList } from "@/components/product-cards/cards";

export default async function Home() {
  const { products } = await fetchProduct();
 /*const [name, setName] = useState<string>("Suzan");      <h1>Hello {name}</h1>*/
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

