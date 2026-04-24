import React from 'react'
import styles from './PDPWrapper.module.css'

export default function PDPWrapper({ children }: any) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}