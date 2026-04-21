import React, { useState } from "react";
import { usePDP } from "@faststore/core";
import styles from "./CustomProductInfo.module.css";
import { QuantitySelector } from "@faststore/ui";
import "@faststore/ui/src/components/molecules/QuantitySelector/styles.scss";
const [quantity, setQuantity] = useState(1);

export default function CustomProductInfo(props: any) {
  const { data } = usePDP();
  const product = data?.product;

  if (!product) return null;

  const price = product.offers?.offers?.[0]?.price;

  // 🔥 FIX IMPORTANTE
  const config = props?.productTitle ?? props ?? {};

  const showRating = config.showRating;
  const customSubtitle = config.customSubtitle;
  const showRef = config.refNumber;

  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>
      {customSubtitle && (
        <div className={styles.subtitle}>{customSubtitle}</div>
      )}

      {showRating && (
        <div className={styles.rating}>⭐⭐⭐⭐☆</div>
      )}
      {showRef && (
        <div className={styles.ref}>
         REF: {product.sku}
        </div>
      )}
      <div className={styles.price}>S/ {price}</div>
      <div className={styles.buyRow}>
  
    
    <QuantitySelector
        min={1}
        max={10}
        initial={1}
        onChange={(value) => setQuantity(value)}
    />
   
    <div className={styles.buyButton}>
        {props.children}
    </div>

    </div>
    </div>
  );
}