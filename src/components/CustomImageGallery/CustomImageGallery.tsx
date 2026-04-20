import React, { useState } from "react";
import { usePDP } from "@faststore/core";
import styles from "./CustomImageGallery.module.css";

export default function CustomGallery() {
  const { data } = usePDP();
  const product = data?.product;

  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  const images = product.image ?? [];

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbs}>
        {images.map((img: any, i: number) => (
          <img
            key={i}
            src={img.url}
            onClick={() => setSelectedImage(i)}
            className={selectedImage === i ? styles.active : ""}
          />
        ))}
      </div>

      <div className={styles.main}>
        <img src={images[selectedImage]?.url} />
      </div>
    </div>
  );
}