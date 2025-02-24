"use client";

import { useEffect, useState } from "react";
import { fetchProduct } from "@/app/actions";
import { Product } from "@/interfaces";
import { CardList } from "@/components/product-cards/cards";
import styles from "./search.module.css";

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => { 
    async function loadProducts() {
      try {
      const { products } = await fetchProduct();
      setProducts(products);
      setFilteredProducts(products);
    } catch (err) {
      setError("Kunde inte ladda productdata. Försök igen senare.");
      console.error("Fetch error:", err);
    }
  };
    loadProducts();
  }, []);

  // Sortera produkter
  const handleSort = (option: string) => {
    setSortOption(option);
    let sortedProducts = [...filteredProducts];

    if (option === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } 

    setFilteredProducts(sortedProducts);
  };

  // Filtrera produkter baserat på tagg
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    let filtered = products.filter((product) => product.tags.includes(tag));
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Search Products</h1>

        {/* Taggfilter med snygg styling */}
        <div className={styles.tagFilters}>
          <button onClick={() => handleTagClick("meat")}>Meat</button>
          <button onClick={() => handleTagClick("beauty")}>Beauty</button>
          <button onClick={() => handleTagClick("perfumes")}>Perfumes</button>
          <button onClick={() => handleTagClick("fruits")}>Fruits</button>
          <button onClick={() => handleTagClick("cat food")}>Cat Food</button>
          <button onClick={() => handleTagClick("dog food")}>Dog Food</button>
          <button onClick={() => handleTagClick("furniture")}>Möbler</button>
          <button onClick={() => handleTagClick("vegetables")}>vegetables</button>
          <button onClick={() => handleTagClick("cooking essentials")}>cooking essentials</button>
          <button onClick={() => handleTagClick("desserts")}>desserts</button>
          <button onClick={() => handleTagClick("dairy")}>Färska ägg</button>
          <button onClick={() => handleTagClick("seafood")}>seafood</button>
          <button onClick={() => handleTagClick("condiments")}>Honung</button>
        </div>

        {/* Sorteringsdropdown */}
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className={styles.sortDropdown}
        >
          <option value="price-asc">Pris: Lågt till Högt</option>
          <option value="price-desc">Pris: Högt till Lågt</option>
        </select>

        {/* Visar filtrerade produkter */}
        <CardList products={filteredProducts} />
      </main>
    </div>
  );
}


