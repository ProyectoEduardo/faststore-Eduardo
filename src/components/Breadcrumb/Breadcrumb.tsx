import React from 'react'
import { usePDP } from '@faststore/core'
import { useSearch } from '@faststore/sdk'
import styles from './Breadcrumb.module.scss'

type Item = {
    label: string
    link?: string
}

export interface BreadcrumbProps {
    enabled?: boolean
    items?: Item[]
    separator?: string
}

export default function Breadcrumb({
    enabled = true,
    items,
    separator = '/',
}: BreadcrumbProps) {
    const { data } = usePDP()
    const search = useSearch()

    if (!enabled) return null

    let finalItems: Item[] = []

    if (data?.product?.breadcrumb?.length) {
        finalItems = data.product.breadcrumb.map((item: any) => ({
            label: item.name,
            link: item.href,
        }))
    }

    else if (search?.breadcrumb?.length) {
        finalItems = search.breadcrumb.map((item: any) => ({
            label: item.name,
            link: item.href,
        }))
    }

    else if (items?.length) {
        finalItems = items
    }

    if (!finalItems.length) return null

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {finalItems.map((item, index) => {
                    const isLast = index === finalItems.length - 1

                    return (
                        <span key={index} className={styles.item}>
                            {!isLast && item.link ? (
                                <a href={item.link} className={styles.link}>
                                    {item.label}
                                </a>
                            ) : (
                                <span className={styles.current}>
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <span className={styles.separator}>
                                    {separator}
                                </span>
                            )}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}