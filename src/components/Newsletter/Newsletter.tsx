import React, { useState } from 'react'
import styles from './Newsletter.module.scss'

export interface NewsletterProps {
    enabled?: boolean
    title?: any
    subtitle?: any
    backgroundColor?: string
    backgroundImage?: string
    buttonText?: string
    successMessage?: string
    errorMessage?: string
}

export default function Newsletter({
    enabled = true,
    title,
    subtitle,
    backgroundColor = '#f5f5f5',
    backgroundImage,
    buttonText = 'Suscribirme',
    successMessage = '¡Gracias por suscribirte!',
    errorMessage = 'Correo inválido',
}: NewsletterProps) {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    if (!enabled) return null

    const validateEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            setStatus('error')
            return
        }

        setStatus('success')
        setEmail('')
    }

    return (
        <section
            className={styles.wrapper}
            style={{
                backgroundColor,
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : undefined,
            }}
        >
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

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />

                    <button type="submit" className={styles.button}>
                        {buttonText}
                    </button>
                </form>

                {status === 'success' && (
                    <span className={styles.success}>{successMessage}</span>
                )}

                {status === 'error' && (
                    <span className={styles.error}>{errorMessage}</span>
                )}
            </div>
        </section>
    )
}