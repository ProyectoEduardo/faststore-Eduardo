import React from "react"
import styles from "./footer.module.css"

type LinkItem = {
  label: string
  href: string
}

type Column = {
  title: string
  links: LinkItem[]
}

type FooterProps = {
  logo?: string
  columns?: Column[]
  copyright?: string
}

function Footer({
  logo,
  columns = [],
  copyright,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Logo */}
        {logo && (
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
        )}

        {/* Columnas */}
        <div className={styles.columns}>
          {columns.map((col, index) => (
            <div key={index} className={styles.column}>
              <h4 className={styles.title}>{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        {copyright && (
          <div className={styles.bottom}>
            <p>{copyright}</p>
          </div>
        )}

      </div>
    </footer>
  )
}

export default Footer

// 👇 IMPORTANTE (CMS schema)
export const schema = {
  title: "Footer Custom",
  description: "Footer editable desde CMS",
  type: "object",
  properties: {
    logo: {
      title: "Logo",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    columns: {
      title: "Columnas",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            title: "Título",
            type: "string"
          },
          links: {
            title: "Links",
            type: "array",
            items: {
              type: "object",
              properties: {
                label: {
                  title: "Texto",
                  type: "string"
                },
                href: {
                  title: "URL",
                  type: "string"
                }
              }
            }
          }
        }
      }
    },
    copyright: {
      title: "Copyright",
      type: "string"
    }
  }
}