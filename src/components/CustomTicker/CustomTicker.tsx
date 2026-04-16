import React from 'react'
import styles from './CustomTicker.module.scss'

export interface CustomTickerProps {
    enabled?: boolean
    text: string
    backgroundColor?: string
    textColor?: string
    animate?: boolean
    duration?: number
}

export default function CustomTicker({
    enabled = true,
    text,
    backgroundColor = '#000',
    textColor = '#fff',
    animate = true,
    duration = 10,
}: CustomTickerProps) {
    if (!enabled || !text) return null

    return (
        <div
            className={styles.ticker}
            style={{
                background: backgroundColor,
                color: textColor,
            }}
        >
            <div
                className={`${styles.content} ${animate ? styles.animate : ''}`}
                style={{
                    animationDuration: `${duration}s`,
                }}
            >
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}