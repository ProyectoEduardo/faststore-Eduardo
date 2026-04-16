import React from 'react'
import styles from './HeroBanner.module.scss'

export interface HeroBannerProps {
  backgroundImage?: string
  backgroundColor?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  showCTA?: boolean
  alignment?: 'left' | 'center' | 'right'
}

export default function HeroBanner({
  backgroundImage,
  backgroundColor = '#000',
  title,
  subtitle,
  ctaText,
  ctaLink,
  showCTA = true,
  alignment = 'center',
}: HeroBannerProps) {
  return (
    <section
      className={`${styles.banner} ${styles[alignment]}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundImage ? undefined : backgroundColor,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        {title && (
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}

        {subtitle && (
          <div
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}

        {showCTA && ctaText && (
          <a href={ctaLink || '#'} className={styles.button}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}