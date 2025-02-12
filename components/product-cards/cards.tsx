import Image from "next/image";
import styles from "./cards.module.css";
import { Product } from "@/interfaces";

const pills = (tagNames: string[]) => {
  return (
    <ul role="list" className={styles.tags}>
      {tagNames.map((tag, index) => (
        <li className={styles.tag} key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

// Komponent för att visa listan med kort
export function CardList({ products }: { products: Product[] }) {
  return (
    <ul className={styles.cards} role="list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
}

// Enskilt produktkort
export function Card({ product }: { product: Product }) {
  // Beräkna det rabatterade priset
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <li className={styles.card}>
      <h2>{product.title}</h2>
      <span className={styles.category}>{product.category}</span>

      <div>{pills(product.tags)}</div>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={product.thumbnail} // Ändrat från images till thumbnail
          width={200}
          height={200}
          alt={`Bild ${product.title}`}
        />
      </div>

      <h3>Description:</h3>
      <p>{product.description}</p>

      <h3>Price:</h3>
      <p className={styles.price}>
        <span className={styles.oldPrice}>${product.price.toFixed(2)}</span> ${discountedPrice}
      </p>

      <h3>Reviews:</h3>
      <ol>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.reviewerName}:</strong> {review.comment}
          </li>
        ))}
      </ol>
    </li>
  );
}
