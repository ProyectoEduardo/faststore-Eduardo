import React, { useState } from "react";
import { usePDP } from "@faststore/core";
import styles from "./CustomSizes.module.css";

export default function CustomSizes() {
  const { data } = usePDP();
  const product = data?.product;

  const [selected, setSelected] = useState<any>(null);

  if (!product) return null;

  const variants =
    product.isVariantOf?.skuVariants?.allVariantProducts || [];

  return (
    <div className={styles.container}>
      <span>Seleccione talla</span>

      <div className={styles.sizes}>
        {variants.map((v: any) => {
          const active = selected?.productId === v.productId;

          return (
            <button
              key={v.productId}
              onClick={() => setSelected(v)}
              className={active ? styles.active : ""}
            >
              {v.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}