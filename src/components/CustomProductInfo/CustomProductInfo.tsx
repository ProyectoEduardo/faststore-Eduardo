import React, { useState } from "react";
import { usePDP } from "@faststore/core";
//import styles from "./CustomProductInfo.module.css";
import { QuantitySelector } from "@faststore/ui";
import { BuyButton } from '@faststore/ui'
import { Rating } from "@faststore/ui";
import { Icon } from '@faststore/ui'
import styles from '../customRating.module.scss'



export default function CustomProductInfo(props: any) {
  const { data } = usePDP();
  const product = data?.product;

  //const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const price = product.offers?.offers?.[0]?.price;

  const config = props?.productTitle ?? props ?? {};
  const [rating, setRating] = useState(3)
  //const showRating = config.showRating;
  const customSubtitle = config.customSubtitle;
  const showRef = config.refNumber;

  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>

      {customSubtitle && (
        <div className={styles.subtitle}>{customSubtitle}</div>
      )}
      
    <Rating value={rating} onChange={setRating} icon={<Icon name="Star" />} />

      {showRef && (
        <div className={styles.ref}>
          REF: {product.sku}
        </div>
      )}

      <div className={styles.price}>S/ {price}</div>

      <div className={styles.buyRow}>
        <QuantitySelector min={1} max={10} initial={5} />
        <BuyButton>Buy Now</BuyButton>
      </div>
    </div>
  );
}