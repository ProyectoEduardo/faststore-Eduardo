import { useState } from 'react'
import { usePDP } from '@faststore/core'
import styles from './product-gallery.module.scss'

const ProductGallery = () => {
  const { data } = usePDP()
  const product = data?.product

  if (!product) return null

const images = product.image || []

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  if (!images.length) return null

  const currentImage = images[selectedIndex]
  const next = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbs}>
{images.map((img: any, i: number) => (
  <img
    key={i}
    src={img.url}
    className={`${styles.thumb} ${i === selectedIndex ? styles.active : ''}`}
    onClick={() => setSelectedIndex(i)}
  />
))}
      </div>

      <div className={styles.main}>
        <button className={styles.lefflecha} onClick={prev}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M7.73716 0.00667953C7.4125 0.0955429 7.12282 0.281651 6.90705 0.539984C4.73683 2.74467 2.56343 4.94679 0.386837 7.14636C0.216122 7.29348 0.0940619 7.48893 0.0367937 7.7069C-0.0204754 7.92486 -0.0102491 8.1551 0.0661001 8.36713C0.130836 8.54157 0.232019 8.7002 0.362906 8.83244C2.59695 11.1054 4.83513 13.3746 7.07747 15.6399C7.22277 15.8068 7.41657 15.9242 7.63181 15.9757C7.84705 16.0272 8.073 16.0102 8.27812 15.9271C8.47909 15.8571 8.65446 15.7285 8.7816 15.5578C8.90875 15.3871 8.98182 15.1823 8.99141 14.9697C9.00644 14.7955 8.98098 14.6201 8.91703 14.4573C8.85309 14.2946 8.75238 14.1488 8.62278 14.0314C8.10512 13.5099 7.58875 12.9871 7.07364 12.4631C5.64832 11.0199 4.22301 9.57669 2.79769 8.13349C2.73684 8.08188 2.6825 8.02306 2.63588 7.9583C2.6931 7.93344 2.74684 7.90125 2.79576 7.86255C4.73491 5.9017 6.67312 3.93988 8.61035 1.97712C8.77565 1.83228 8.89498 1.64228 8.95367 1.43049C9.01236 1.2187 9.00783 0.994359 8.94066 0.785102C8.8924 0.612196 8.80075 0.454499 8.6744 0.326978C8.54805 0.199456 8.3912 0.106326 8.21874 0.056469L8.0445 -1.14441e-05L7.73716 0.00667953Z" fill="#76B82A"></path></svg></button>

        <img
          src={currentImage.url}
          className={zoom ? styles.zoom : ''}
          onClick={() => setZoom(!zoom)}
        />

        <button className={styles.rightflecha} onClick={next}><svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><path d="M1.25845 0.00667953C1.5831 0.0955429 1.87278 0.281651 2.08856 0.539984C4.25877 2.74467 6.43217 4.94679 8.60877 7.14636C8.77948 7.29348 8.90154 7.48893 8.95881 7.7069C9.01608 7.92486 9.00585 8.1551 8.92951 8.36713C8.86477 8.54157 8.76359 8.7002 8.6327 8.83244C6.39866 11.1054 4.16048 13.3746 1.91814 15.6399C1.77283 15.8068 1.57903 15.9242 1.3638 15.9757C1.14856 16.0272 0.922608 16.0102 0.717488 15.9271C0.516519 15.8571 0.341146 15.7285 0.214002 15.5578C0.0868573 15.3871 0.0137808 15.1823 0.00419502 14.9697C-0.0108296 14.7955 0.0146283 14.6201 0.0785719 14.4573C0.142515 14.2946 0.243223 14.1488 0.372821 14.0314C0.890481 13.5099 1.40686 12.9871 1.92197 12.4631C3.34729 11.0199 4.77259 9.57669 6.19791 8.13349C6.25877 8.08188 6.31311 8.02306 6.35973 7.9583C6.30251 7.93344 6.24877 7.90125 6.19984 7.86255C4.26069 5.9017 2.32249 3.93988 0.385254 1.97712C0.219957 1.83228 0.100621 1.64228 0.0419313 1.43049C-0.0167583 1.2187 -0.0122263 0.994359 0.0549483 0.785102C0.103209 0.612196 0.194857 0.454499 0.321206 0.326978C0.447555 0.199456 0.604408 0.106326 0.776861 0.056469L0.951108 -1.14441e-05L1.25845 0.00667953Z" fill="#76B82A"></path></svg></button>
      </div>
    </div>
  )
}

export default ProductGallery