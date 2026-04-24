import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import OurStores from './CustomProductTitle'

import ProductTabs from './ProductTabs'
import ShippingCalculator from './ShippingCalculator'
import Breadcrumb from './Breadcrumb'

import styles from './PDPLayout.module.scss'

export default function PDPLayout() {
  return (
    <div className={styles.container}>
      
      {/* Breadcrumb arriba */}
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>

      {/* TOP: 2 columnas */}
      <div className={styles.top}>
        <div className={styles.left}>
          <ProductGallery />
        </div>

        <div className={styles.right}>
          <ProductInfo />
          {/* <OurStores/> */}
          <ShippingCalculator />
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <ProductTabs />
      </div>

    </div>
  )
}

