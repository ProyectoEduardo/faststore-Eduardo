import React from "react"
import styles from "./footer.module.css"

type Link = {
  label: string
  href: string
}

type Column = {
  title: string
  links: Link[]
}

type Social = {
  icon: string
  href: string
}

type FooterProps = {
  benefits?: string[]
  columns?: Column[]
  socials?: Social[]
}

export default function CustomFooter({
  benefits = [],
  columns = [],
  socials = [],
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      
      {/* BENEFICIOS */}
      <div className={styles.benefits}>
        {benefits.map((item, i) => (
          <div key={i} className={styles.benefitItem}>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* LINEA */}
      <div className={styles.divider} />

      {/* CONTENIDO */}
      <div className={styles.container}>
        <div className={styles.columns}>
          {columns.map((col, i) => (
            <div key={i} className={styles.column}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* REDES */}
          <div className={styles.column}>
            <h4>Follow Us</h4>
            <div className={styles.socials}>
              {socials.map((s, i) => (
                <a key={i} href={s.href}>
                  <img src={s.icon} alt="social" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

// SCHEMA
export const schema = {
  title: "Footer Pro",
  type: "object",
  properties: {
    benefits: {
      title: "Beneficios (arriba)",
      type: "array",
      items: {
        type: "string"
      }
    },
    columns: {
      title: "Columnas",
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          links: {
            type: "array",
            items: {
              type: "object",
              properties: {
                label: { type: "string" },
                href: { type: "string" }
              }
            }
          }
        }
      }
    },
    socials: {
      title: "Redes",
      type: "array",
      items: {
        type: "object",
        properties: {
          icon: { type: "string" },
          href: { type: "string" }
        }
      }
    }
  }
}