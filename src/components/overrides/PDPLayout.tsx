import React from 'react'
import styles from './PDPLayout.module.scss'

export default function PDPLayout({ children }: any) {
  return (
    <div className={styles.pdpLayout}>
      {children}
    </div>
  )
}