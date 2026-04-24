import React, { useEffect, useState } from "react";
import { usePDP } from "@faststore/core";
import { useRouter } from "next/router";
//import styles from "./CustomProductInfo.module.css";
import { QuantitySelector } from "@faststore/ui";
import { BuyButton } from '@faststore/ui'
import { Rating } from "@faststore/ui";
import { Icon } from '@faststore/ui'
import styles from '../customRating.module.scss'



export default function CustomProductInfo(props: any) {
  const { data } = usePDP();
  const product = data?.product;
  const router = useRouter();

  //const [quantity, setQuantity] = useState(1);

  if (!product) return null;
 const skuVariants = product.isVariantOf?.skuVariants;
  const price = product.offers?.offers?.[0]?.price;

  const config = props?.productTitle ?? props ?? {};
  const [rating, setRating] = useState(3)
  //const showRating = config.showRating;
  const customSubtitle = config.customSubtitle;
  const showRef = config.refNumber;
  const activeSize = skuVariants?.activeVariations?.talla ?? null;
  const activeColor = skuVariants?.activeVariations?.color ?? null;

  const [selectedSize, setSelectedSize] = useState<string | null>(activeSize);
  const [selectedColor, setSelectedColor] = useState<string | null>(activeColor);

useEffect(() => {
    setSelectedSize(activeSize);
    setSelectedColor(activeColor);
  }, [activeSize, activeColor]);

  function navigateToVariant(size: string, color: string) {
    const key = `talla-${size}-color-${color}`;
    const slug = skuVariants?.slugsMap?.[key];

    if (slug) {
      router.push(`/${slug}/p`);
    }
  }

  return (
    <div className={styles.info}>
      <h1>{product.name}</h1>

      {customSubtitle && (
        <div className={styles.subtitle}>{customSubtitle}</div>
      )}

       {showRef && (
        <div className={styles.ref}>
          REF: {product.sku}
        </div>
      )}
      
    {/*<Rating value={3.8} icon={<Icon name="Heart" />} />*/}

      <Rating value={rating} onChange={setRating} icon={<Icon name="Star" />} />

      <div className={styles.price}>S/ {price}</div>
      {/* TALLAS */}
      <div>
        <p className={styles.label}>Escoge tu talla:</p>
        <div className={styles.sizes}>
          {skuVariants?.availableVariations?.talla?.map((item: any) => {
            const isActive = selectedSize === item.value;

            return (
              <button
                key={item.value}
                className={`${styles.sizeBtn} ${isActive ? styles.active : ""}`}
                onClick={() => {
                  setSelectedSize(item.value);
                  if (selectedColor) {
                    navigateToVariant(item.value, selectedColor);
                  }
                }}
              >
                {item.value}
              </button>
            );
          })}
        </div>
      </div>

      {/* COLORES */}
      <div>
        <p className={styles.label}>Escoge tu color:</p>
        <div className={styles.colors}>
          {skuVariants?.availableVariations?.color?.map((item: any) => {
            const isActive = selectedColor === item.value;

            return (
              <button
                key={item.value}
                className={`${styles.colorSwatch} ${isActive ? styles.active : ""}`}
                onClick={() => {
                  setSelectedColor(item.value);
                  if (selectedSize) {
                    navigateToVariant(selectedSize, item.value);
                  }
                }}
                title={item.value}
              >
                <img
                  src={item.src}
                  alt={item.value}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.seccionBtn}>
        <QuantitySelector min={1} max={10} initial={1} />
      <div className={styles.compBtn}><BuyButton>Comprar</BuyButton></div>
        
        
      </div>
    </div>
  );
}